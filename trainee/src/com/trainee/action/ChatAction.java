package com.trainee.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@SuppressWarnings("all")
@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Action(value="ChatAction",results={@Result(location="/Functionality/communicate.jsp",name="success")})
public class ChatAction extends BaseAction {
	

}