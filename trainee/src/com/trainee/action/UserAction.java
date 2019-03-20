package com.trainee.action;

import java.io.IOException;
import java.io.PrintWriter;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.trainee.domain.Business;
import com.trainee.domain.Parent;
import com.trainee.domain.Student;
import com.trainee.domain.Teacher;
import com.trainee.utils.Identity;
import com.trainee.utils.MailUtils;
import com.trainee.utils.SMSUtil;

@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
public class UserAction extends BaseAction {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String username;
	private String password;
	
	private Student student;
	private Business business;
	private Parent parent;
	private Teacher teacher;
	/**
	 * 学生登录
	 * @throws IOException 
	 * 
	 */
	@Action(value = "studentLogin", results = { @Result(type = "json") })
	public void login4() throws IOException {
		Student student = new Student();
		student.setUsername(username);
		Student result = (Student) userService.search(student);
		if ((result != null) && (result.getPassword().equals(password))) {
			Identity identity = new Identity();
			identity.setUserId(result.getId());
			identity.setUserType("student");
			identity.setUser(result);
			ServletActionContext.getRequest().getSession().setAttribute("identity", identity);
			ServletActionContext.getRequest().getSession().setMaxInactiveInterval(3600 * 3);
			ServletActionContext.getResponse().getWriter().print(true);
			ServletActionContext.getResponse().getWriter().close();
		}else{
			ServletActionContext.getResponse().getWriter().print(false);
			ServletActionContext.getResponse().getWriter().close();
		}
	}

	/**
	 * 家长登录
	 * 
	 * @return
	 * @throws IOException 
	 */
	@Action(value = "familyLogin", results = { @Result(type="json") })
	public void login3() throws IOException {
		Parent parent = new Parent();
		parent.setUsername(username);
		Parent result = (Parent) userService.search(parent);
		if ((result != null) && (result.getPassword().equals(password))) {
			Identity identity = new Identity();
			identity.setUserId(result.getId());
			identity.setUserType("parent");
			identity.setUser(result);
			ServletActionContext.getRequest().getSession().setAttribute("identity", identity);
			ServletActionContext.getRequest().getSession().setMaxInactiveInterval(3600 * 3);
			ServletActionContext.getResponse().getWriter().print(true);
			ServletActionContext.getResponse().getWriter().close();
		}else{
			ServletActionContext.getResponse().getWriter().print(false);
			ServletActionContext.getResponse().getWriter().close();
		}
	}

	/**
	 * 企业登录
	 * 
	 * @return
	 * @throws IOException 
	 */
	@Action(value = "companyLogin", results = { @Result(type = "json") })
	public void login2() throws IOException {
		Business business = new Business();
		business.setUsername(username);
		Business result = (Business) userService.search(business);
		if ((result != null) && (result.getPassword().equals(password))) {
			Identity identity = new Identity();
			identity.setUserId(result.getId());
			identity.setUserType("business");
			identity.setUser(result);
			ServletActionContext.getRequest().getSession().setAttribute("identity", identity);
			ServletActionContext.getRequest().getSession().setMaxInactiveInterval(3600 * 3);
			ServletActionContext.getResponse().getWriter().print(true);
			ServletActionContext.getResponse().getWriter().close();
		}else{
			ServletActionContext.getResponse().getWriter().print(false);
			ServletActionContext.getResponse().getWriter().close();
		}
	}

	/**
	 * 学校登录
	 * 
	 * @return
	 * @throws IOException 
	 */
	@Action(value = "teacherLogin", results = { @Result(type = "redirect") })
	public void login1() throws IOException {
		Teacher teacher = new Teacher();
		teacher.setUsername(username);
		Teacher result = (Teacher) userService.search(teacher);
		if ((result != null) && (result.getPassword().equals(password))) {
			Identity identity = new Identity();
			identity.setUserId(result.getId());
			identity.setUserType("teacher");
			identity.setUser(result);
			ServletActionContext.getRequest().getSession().setAttribute("identity", identity);
			ServletActionContext.getRequest().getSession().setMaxInactiveInterval(3600 * 3);
			ServletActionContext.getResponse().getWriter().print(true);
			ServletActionContext.getResponse().getWriter().close();
		}else{
			ServletActionContext.getResponse().getWriter().print(false);
			ServletActionContext.getResponse().getWriter().close();
		}
	}

	/**
	 * 注册用户
	 * 
	 * @return SUCCESS OR ERROR
	 */
	@Action(value = "register", results = { @Result(name = "success", location = "/Functionality/shenfen.jsp") })
	public String register() {
		if (id == 2) {
			// typeName = "企业";
			business.setImage("face.png");
			userService.save(business);
		} else if (id == 3) {
			// typeName = "家长";
			parent.setImage("face.png");
			userService.save(parent);
		} else if (id == 4) {
			// typeName = "学生";
			student.setImage("face.png");
			System.out.println(student);
			userService.save(student);
		}
		return SUCCESS;
	}

	@Action(value="getUserInfo",results={@Result(name="student",location="/Functionality/studentmessage.jsp"),
			@Result(name="parent",location="/Functionality/familymessage.jsp"),
			@Result(name="teacher",location="/Functionality/teachermessage.jsp"),
			@Result(name="business",location="/Functionality/companymessage.jsp")})
	public String getUserInfo(){
		Identity identity = (Identity) ServletActionContext.getContext().getSession().get("identity");
		if(identity.getUserType().equals("student")){
			Student studentInfo = new Student();
			studentInfo.setId(identity.getUserId());
			studentInfo = userService.search(studentInfo);
			ServletActionContext.getRequest().setAttribute("studentInfo", studentInfo);
			return "student";
		}else if(identity.getUserType().equals("teacher")){
			Teacher teacherInfo = new Teacher();
			teacherInfo.setId(identity.getUserId());
			teacherInfo = userService.search(teacherInfo);
			ServletActionContext.getRequest().setAttribute("teacherInfo", teacherInfo);
			return "teacher";
		}else if(identity.getUserType().equals("business")){
			Business businessInfo = new Business();
			businessInfo.setId(identity.getUserId());
			businessInfo = userService.search(businessInfo);
			ServletActionContext.getRequest().setAttribute("businessInfo", businessInfo);
			return "business";
		}else{
			Parent parentInfo = new Parent();
			parentInfo.setId(identity.getUserId());
			parentInfo = userService.search(parentInfo);
			ServletActionContext.getRequest().setAttribute("parentInfo", parentInfo);
			return "parent";
		}
	}
	
	/**
	 * 退出系统登录
	 * @return
	 */
	@Action(value="logout",results={@Result(name="success",location="/Functionality/shenfen.jsp")})
	public String logout(){
		ServletActionContext.getContext().getSession().remove("identity");
		return SUCCESS;
	}
	
	@Action(value="updateInfo",results={@Result(type="json")})
	public void updateInfo() throws IOException{
		Identity identity = (Identity) ServletActionContext.getContext().getSession().get("identity");
		PrintWriter writer = ServletActionContext.getResponse().getWriter();
		try {
			if(identity.getUserType().equals("student")){
				student = userService.update(student);
			}else if(identity.getUserType().equals("teacher")){
				teacher = userService.update(teacher);
			}else if(identity.getUserType().equals("parent")){
				parent = userService.update(parent);
			}else{
				business = userService.update(business);
			}
			writer.print(true);
		} catch (Exception e) {
			e.printStackTrace();
			writer.print(false);
		}
		writer.flush();
		writer.close();
	}
	/**
	 * 获取邮箱验证码
	 * @throws Exception
	 */
	@Action(value = "getEmailCode", results = { @Result(type = "json") })
	public void getEmailCode() throws Exception{
		String code = (int)((Math.random()*9+1)*100000)+"";
		MailUtils.sendMail(username, code);
		ServletActionContext.getRequest().getSession().setAttribute("emailCode", code);
		ServletActionContext.getResponse().getWriter().print(true);
		ServletActionContext.getResponse().getWriter().close();
	}	
	
	/**
	 * 获取手机验证码
	 * @throws Exception 
	 */
	@Action(value="getPhoneCode",results = {@Result(type="json")})
	public void getPhoneCode() throws Exception{
		String code = (int)((Math.random()*9+1)*100000)+"";
		SMSUtil.sendPhoneCode(username, code);
		ServletActionContext.getRequest().getSession().setAttribute("phoneCode", code);
		ServletActionContext.getResponse().getWriter().print(true);
		ServletActionContext.getResponse().getWriter().close();
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Business getBusiness() {
		return business;
	}

	public void setBusiness(Business business) {
		this.business = business;
	}

	public Parent getParent() {
		return parent;
	}
	
	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public final Teacher getTeacher() {
		return teacher;
	}

	public final void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	
}
