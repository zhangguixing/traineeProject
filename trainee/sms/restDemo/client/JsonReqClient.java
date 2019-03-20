/**
 * @author Glan.duanyj
 * @date 2014-05-12
 * @project rest_demo
 */
package restDemo.client;

import java.util.Date;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import restDemo.DateUtil;
import restDemo.EncryptUtil;
import restDemo.models.Callback;
import restDemo.models.TemplateSMS;

import com.google.gson.Gson;

public class JsonReqClient extends AbsRestClient {

    private static Logger logger = Logger.getLogger(JsonReqClient.class);

    @Override
    public String callback(String accountSid, String authToken, String appId,
                           String fromClient, String to, String fromSerNum, String toSerNum) {
        // TODO Auto-generated method stub
        String result = "";
        DefaultHttpClient httpclient = getDefaultHttpClient();
        try {
            //MD5加密
            EncryptUtil encryptUtil = new EncryptUtil();
            // 构造请求URL内容
            String timestamp = DateUtil.dateToStr(new Date(), DateUtil.DATE_TIME_NO_SLASH);// 时间戳
            String signature = getSignature(accountSid, authToken, timestamp, encryptUtil);
            String url = getStringBuffer().append("/").append(version)
                    .append("/Accounts/").append(accountSid)
                    .append("/Calls/callBack")
                    .append("?sig=").append(signature).toString();
            System.out.println(url);
            Callback callback = new Callback();
            callback.setAppId(appId);
            callback.setFromClient(fromClient);
            callback.setTo(to);
            callback.setFromSerNum(fromSerNum);
            callback.setToSerNum(toSerNum);
            Gson gson = new Gson();
            String body = gson.toJson(callback);
            body = "{\"callback\":" + body + "}";
            logger.info(body);
            HttpResponse response = post("application/json", accountSid, authToken, timestamp, url, httpclient, encryptUtil, body);
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                result = EntityUtils.toString(entity, "UTF-8");
            }
            EntityUtils.consume(entity);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 关闭连接
            httpclient.getConnectionManager().shutdown();
        }
        return result;
    }

   

    /**
     * 短信发送接口
     * @param accountSid 注册云之讯官网，在控制台中即可获取此参数
     * @param authToken 注册云之讯官网，在控制台中即可获取此参数
     * @param appId 创建应用时系统分配的唯一标示，在“应用列表”中可以查询
     * @param templateId 创建短信模板时系统分配的唯一标示，在“短信管理”中可以查询
     * @param to 需要下发短信的手机号码,支持国际号码，需要加国家码
     * @param param 需要下发短信的手机号码,支持国际号码，需要加国家码
     * @return String
     * templateSMS
     */
    @Override
    public String templateSMS(String accountSid, String authToken,
                              String appId, String templateId, String to, String param) {
        // TODO Auto-generated method stub
        String result = "";
        DefaultHttpClient httpclient = getDefaultHttpClient();
        try {
            //MD5加密
            EncryptUtil encryptUtil = new EncryptUtil();
            // 构造请求URL内容
            String timestamp = DateUtil.dateToStr(new Date(),
                    DateUtil.DATE_TIME_NO_SLASH);// 时间戳
            String signature = getSignature(accountSid, authToken, timestamp, encryptUtil);
            String url = getStringBuffer().append("/").append(version)
                    .append("/Accounts/").append(accountSid)
                    .append("/Messages/templateSMS")
                    .append("?sig=").append(signature).toString();
            TemplateSMS templateSMS = new TemplateSMS();
            templateSMS.setAppId(appId);
            templateSMS.setTemplateId(templateId);
            templateSMS.setTo(to);
            templateSMS.setParam(param);
            Gson gson = new Gson();
            String body = gson.toJson(templateSMS);
            body = "{\"templateSMS\":" + body + "}";
            logger.info(body);
            HttpResponse response = post("application/json", accountSid, authToken, timestamp, url, httpclient, encryptUtil, body);
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                result = EntityUtils.toString(entity, "UTF-8");
            }
            EntityUtils.consume(entity);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 关闭连接
            httpclient.getConnectionManager().shutdown();
        }
        return result;
    }


}
