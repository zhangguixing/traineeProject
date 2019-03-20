package com.trainee.utils;

import org.apache.struts2.ServletActionContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class Identity {

	private Integer userId;
	private String userType;
	private Object user;
	
	public Object getUser() {
		return user;
	}
	public void setUser(Object user) {
		this.user = user;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	/*private void getAll() {
		WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(ServletActionContext.getServletContext());
		wac.getBean("userService")
		switch(userType){
		case "student":
		}
	}*/
	@Override
	public String toString() {
		return "Identity [userId=" + userId + ", userType=" + userType + "]";
	}
	
}
