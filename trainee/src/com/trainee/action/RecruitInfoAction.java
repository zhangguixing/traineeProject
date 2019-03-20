package com.trainee.action;

import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.trainee.domain.Recruitment;
import com.trainee.service.RecruitInfoService;
@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
public class RecruitInfoAction extends ActionSupport {
	@Autowired
	private RecruitInfoService recruitInfoService;
	@Action(value="getAllInfo",results={@Result(name="success",location="/Functionality/jianjie.jsp")})
	public String getAllInfo(){
		List<Recruitment> recruitments = recruitInfoService.getAllInfo();
		ServletActionContext.getRequest().setAttribute("recruitments", recruitments);
		return SUCCESS;
	}
}
