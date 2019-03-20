package com.trainee.intercepter;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class LoginIntercepter extends AbstractInterceptor{

	private static final long serialVersionUID = 1L;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		String method = invocation.getProxy().getMethod();
		ActionContext actionContext = invocation.getInvocationContext();
		Object user = actionContext.getSession().get("identity");
		if(!"login1".equals(method) 
				&& !"login2".equals(method) 
				&& !"login3".equals(method) 
				&& !"login4".equals(method) 
				&& !"register".equals(method) 
				&& !"getEmailCode".equals(method) 
				&& !"getPhoneCode".equals(method)){
			if(user == null){
				return "login";
			}else{
				return invocation.invoke();
			}
		}
		
		return invocation.invoke();
	}

}
