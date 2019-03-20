/**
 * @author Glan.duanyj
 * @date 2014-05-12
 * @project rest_demo
 */
package restDemo.client;

import java.io.ByteArrayInputStream;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.BasicHttpEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;
import org.apache.log4j.Logger;

import restDemo.EncryptUtil;
import restDemo.SSLHttpClient;
import restDemo.SysConfig;

public abstract class AbsRestClient {

    protected SysConfig config = SysConfig.getInstance();

    protected boolean isTest = config.getPropertyBoolean("is_test");
    protected String server  = config.getProperty("rest_server");
    protected String sslIP   = config.getProperty("http_ssl_ip");
    protected int sslPort    = config.getPropertyInt("http_ssl_port");
    protected String version = config.getProperty("version");

    private static Logger logger = Logger.getLogger(AbsRestClient.class);


    //==========================================短信发送接口 API===========================================

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
    public abstract String templateSMS(String accountSid, String authToken, String appId, String templateId, String to, String param);

    //==========================================短信发送接口 API===========================================

    /**
     * 双向回拨
     * @param accountSid 主账号ID
     * @param authToken 主账号Token
     * @param appId 应用ID
     * @param fromClient 主叫的clientNumber
     * @param to 被叫的号码
     * @param toSerNum
     * @return String
     * callback
     */
    public abstract String callback(String accountSid, String authToken, String appId, String fromClient, String to, String fromSerNum, String toSerNum);



    /**
     * 请求地址
     * @return
     */
    public StringBuffer getStringBuffer() {
        if(!server.startsWith("https://")){
            return new StringBuffer("https://" + server);
        }
        return new StringBuffer(server);
    }

    /**
     * 获取默认的httpclient
     * @return httpclient
     */
    public DefaultHttpClient getDefaultHttpClient() {
        DefaultHttpClient httpclient = null;
        if (isTest) {
            try {
                SSLHttpClient chc = new SSLHttpClient();
                httpclient = chc.registerSSL(sslIP, "TLS", sslPort, "https");
                HttpParams hParams = new BasicHttpParams();
                hParams.setParameter("https.protocols", "SSLv3,SSLv2Hello");
                httpclient.setParams(hParams);
            } catch (KeyManagementException | NoSuchAlgorithmException e) {
                // TODO: handle exception
                logger.error(e);
            }
        } else {
            httpclient = new DefaultHttpClient();
        }
        return httpclient;
    }

    /**
     * 签名
     * @param accountSid 注册云之讯官网，在控制台中即可获取此参数
     * @param authToken 账户授权令牌
     * @param timestamp 时间戳
     * @param encryptUtil 加密工具类
     * @return signature 验证参数：MD5（账户Id + 账户授权令牌 + 时间戳），共32位(注:转成大写)
     * @throws Exception
     */
    public String getSignature(String accountSid, String authToken, String timestamp, EncryptUtil encryptUtil) throws Exception {
        String sig = accountSid + authToken + timestamp;
        String signature = encryptUtil.md5Digest(sig);
        return signature;
    }

    /**
     * 发送get请求
     * @param cType：客户端响应接收数据格式：application/xml、application/json
     * @param accountSid 注册云之讯官网，在控制台中即可获取此参数
     * @param authToken
     * @param timestamp 时间戳
     * @param url 请求地址
     * @param httpclient http客户端对象
     * @param encryptUtil 加密工具类
     * @return response 请求响应
     * @throws Exception
     */
    public HttpResponse get(String cType, String accountSid, String authToken, String timestamp, String url, DefaultHttpClient httpclient, EncryptUtil encryptUtil) throws Exception {
        HttpGet httppost = new HttpGet(url);
        httppost.setHeader("Accept", cType);//
        httppost.setHeader("Content-Type", cType + ";charset=utf-8");
        String src = accountSid + ":" + timestamp;
        String auth = encryptUtil.base64Encoder(src);
        httppost.setHeader("Authorization", auth);
        HttpResponse response = httpclient.execute(httppost);
        return response;
    }

    /**
     * 发送post请求
     * @param cType：客户端响应接收数据格式：application/xml、application/json
     * @param accountSid 注册云之讯官网，在控制台中即可获取此参数
     * @param authToken
     * @param timestamp 时间戳
     * @param url 请求地址
     * @param httpclient http客户端
     * @param encryptUtil 加密工具类
     * @param body 请求参数
     * @return response 请求响应
     * @throws Exception
     */
    public HttpResponse post(String cType, String accountSid, String authToken, String timestamp, String url, DefaultHttpClient httpclient, EncryptUtil encryptUtil, String body) throws Exception {
        HttpPost httppost = new HttpPost(url);
        httppost.setHeader("Accept", cType);
        httppost.setHeader("Content-Type", cType + ";charset=utf-8");
        String src = accountSid + ":" + timestamp;
        String auth = encryptUtil.base64Encoder(src);
        httppost.setHeader("Authorization", auth);
        BasicHttpEntity requestBody = new BasicHttpEntity();
        requestBody.setContent(new ByteArrayInputStream(body.getBytes("UTF-8")));
        requestBody.setContentLength(body.getBytes("UTF-8").length);
        httppost.setEntity(requestBody);
        // 执行客户端请求
        HttpResponse response = httpclient.execute(httppost);
        return response;
    }


}
