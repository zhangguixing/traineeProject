package com.trainee.utils;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

  
public class MailUtils {  
  /**
   * 发送邮件
   * @param to 收件人
   * @param code 验证码
   * @throws Exception
   */
  public static void sendMail(String to,String code){  
	  Properties prop = new Properties();
	      prop.setProperty("mail.host", "smtp.sina.com");
	      prop.setProperty("mail.transport.protocol", "smtp");
	      prop.setProperty("mail.smtp.auth", "true");
	      //使用JavaMail发送邮件的5个步骤
	      //1、创建session
	      Session session = Session.getInstance(prop);
	      //开启Session的debug模式，这样就可以查看到程序发送Email的运行状态
	      session.setDebug(false);
	      try {
	      	  //2、通过session得到transport对象
	          Transport ts = session.getTransport();
	          //3、使用邮箱的用户名和密码连上邮件服务器，发送邮件时，发件人需要提交邮箱的用户名和密码给smtp服务器，用户名和密码都通过验证之后才能够正常发送邮件给收件人。
	         
	          // 设置发件人使用的SMTP服务器、用户名、密码  
	          String user = "zhanguo2017@sina.com";//emhhbmd1bzIwMTdAc2luYS5jb20=  
	          String pwd = "13700377988";//MTM3MDAzNzc5ODg= 
	          String host="smtp.sina.com";
	          // 由 Session 对象获得 Transport 对象  
	          // 发送用户名、密码连接到指定的 smtp 服务器  
	          ts.connect(host,user, pwd);  
	          
	          //4、创建邮件
	          //创建邮件对象
	          MimeMessage message = new MimeMessage(session);
	          //指明邮件的发件人
	          message.setFrom(new InternetAddress("zhanguo2017@sina.com"));
	          //指明邮件的收件人，现在发件人和收件人是一样的，那就是自己给自己发
	          message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
	          //邮件的标题
	          message.setSubject("【实习生管理系统】注册");
	          //邮件的文本内容
	          message.setContent("嗨~你好\n<br>欢迎注册实习生管理系统，您的验证码为"+code, "text/html;charset=UTF-8");
	          //5、发送邮件
	          ts.sendMessage(message, message.getAllRecipients());
	          ts.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
  	}  

  public static void main(String[] args) throws Exception {  
      sendMail("2859763798@qq.com","654321");  
  }
}