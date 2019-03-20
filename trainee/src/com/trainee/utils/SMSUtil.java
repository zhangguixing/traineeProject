package com.trainee.utils;

import restDemo.client.JsonReqClient;

public class SMSUtil {
	private static final String accountSid="11c2c1f58e60b9fc24ee7597786fa47d";
	private static final String authToken="dac495f52eb9a610e834aac2b209306b";
	private static final String appId="58dfde94d5274d719e8d45460283a748";
	private static final String templateId="243727";
	/**
	 * 发送短信验证码
	 * @param to 发送人
	 * @param code 验证码
	 */
	public static void sendPhoneCode(String to,String code){
		try {
			new JsonReqClient().templateSMS(accountSid, authToken, appId, templateId, to, code);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		sendPhoneCode("13171861634", "234567");
	}
}
