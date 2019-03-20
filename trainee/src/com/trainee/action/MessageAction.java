package com.trainee.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.trainee.domain.Business;
import com.trainee.domain.BusinessNotice;
import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.domain.Student;
import com.trainee.domain.Teacher;
import com.trainee.domain.TeacherNotice;
import com.trainee.utils.Identity;

@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
public class MessageAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	private String messageInfo;
	private String title;
	private Integer id;
	@SuppressWarnings("rawtypes")
	private List<PageResult> pageResults = new ArrayList<PageResult>();
	// 是否显示新建按钮
	private boolean isShow = false;

	/**
	 * 根据主键删除企业公告
	 * 
	 * @return
	 */
	@Action(value = "deleteBusinessNotice", results = { @Result(name = "success", location = "listBusinessNotice", type = "redirect") })
	public String deleteBusinessNotice() {
		businessService.delete(id);
		return SUCCESS;
	}

	/**
	 * 根据主键删除导师公告
	 * 
	 * @return
	 * @throws Exception
	 */
	@Action(value = "deleteTeacherNotice", results = { @Result(name = "success", location = "listTeacherNotice", type = "redirect") })
	public String deleteTeacherNotice() throws Exception {
		teacherService.delete(id);
		ServletActionContext.getResponse().getWriter().print(true);
		ServletActionContext.getResponse().getWriter().close();
		return SUCCESS;
	}

	/**
	 * 根据主键删除学生实习记录
	 * 
	 * @return
	 * @throws Exception
	 */
	@Action(value = "deleteMessage", results = { @Result(type = "json") })
	public void deleteMessage() throws Exception {
		messageService.deleteDisByOtherId("message_id", id);
		messageService.delete(id);
		ServletActionContext.getResponse().getWriter().print(true);
		ServletActionContext.getResponse().getWriter().close();
	}

	/**
	 * 遍历导师公告
	 * 
	 * @return
	 */
	@Action(value = "listTeacherNotice", results = { @Result(name = "success", location = "/Functionality/record.jsp") })
	public String listTeacherNotice() {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		if (identity.getUserType().equals("student")) {
			Relation relation = new Relation();
			relation.setSid(identity.getUserId());
			List<Relation> relations = studentService.search(relation);
			if (relations.size() > 0) {
				getTeacherNotices(relations);
			}
		} else if (identity.getUserType().equals("teacher")) {
			Relation relation = new Relation();
			relation.setTid(identity.getUserId());
			List<Relation> relations = teacherService.search(relation);
			if (relations.size() > 0) {
				getTeacherNotices(relations);
			}
			isShow = true;
		} else if (identity.getUserType().equals("business")) {
			Relation relation = new Relation();
			relation.setBid(identity.getUserId());
			List<Relation> relations = businessService.search(relation);
			if (relations.size() > 0) {
				getTeacherNotices(relations);
			}
		} else if (identity.getUserType().equals("parent")) {

			Relation relation = new Relation();
			relation.setPid(identity.getUserId());
			List<Relation> relations = parentService.search(relation);
			if (relations.size() > 0) {
				getTeacherNotices(relations);
			}
		}
		ServletActionContext.getRequest().setAttribute("pageResults", pageResults);
		ServletActionContext.getRequest().setAttribute("method", "listTeacherNotice");
		ServletActionContext.getRequest().setAttribute("isShow", isShow);
		ServletActionContext.getRequest().setAttribute("type", "学校公告");
		return SUCCESS;
	}

	/**
	 * 遍历企业公告
	 * 
	 * @return
	 */
	@Action(value = "listBusinessNotice", results = { @Result(name = "success", location = "/Functionality/record.jsp") })
	public String listBusinessNotice() {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");

		if (identity.getUserType().equals("student")) {
			Relation relation = new Relation();
			relation.setSid(identity.getUserId());
			List<Relation> relations = studentService.search(relation);
			if (relations.size() > 0) {
				getBusinessNotices(relations);
			}
		} else if (identity.getUserType().equals("teacher")) {
			Relation relation = new Relation();
			relation.setTid(identity.getUserId());
			List<Relation> relations = teacherService.search(relation);
			if (relations.size() > 0) {
				getBusinessNotices(relations);
			}
		} else if (identity.getUserType().equals("business")) {
			Relation relation = new Relation();
			relation.setBid(identity.getUserId());
			List<Relation> relations = businessService.search(relation);
			if (relations.size() > 0) {
				getBusinessNotices(relations);
			}
			isShow = true;
		} else if (identity.getUserType().equals("parent")) {
			Relation relation = new Relation();
			relation.setPid(identity.getUserId());
			List<Relation> relations = parentService.search(relation);
			if (relations.size() > 0) {
				getBusinessNotices(relations);
			}
		}
		ServletActionContext.getRequest().setAttribute("pageResults", pageResults);
		ServletActionContext.getRequest().setAttribute("method", "listBusinessNotice");
		ServletActionContext.getRequest().setAttribute("isShow", isShow);
		ServletActionContext.getRequest().setAttribute("type", "企业公告");
		return SUCCESS;
	}

	@Action(value = "publish", results = { @Result(name = "student", location = "listStudentMessage", type = "redirect"), @Result(name = "teacher", location = "listTeacherNotice", type = "redirect"), @Result(name = "business", location = "listBusinessNotice", type = "redirect") })
	public String publish() throws Exception {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		if (identity.getUserType().equals("student")) {
			// 学生发表动态
			Message message = new Message();
			message.setMessage(messageInfo);
			message.setTitle(title);
			message.setDate(date);
			Student student = new Student();
			student.setId(identity.getUserId());
			message.setStudent(student);
			messageService.saveMessage(message);
			return "student";
		} else if (identity.getUserType().equals("teacher")) {
			// 学校发布公告
			TeacherNotice teacherNotice = new TeacherNotice();
			teacherNotice.setMessage(messageInfo);
			teacherNotice.setTitle(title);
			teacherNotice.setDate(date);
			Teacher teacher = new Teacher();
			teacher.setId(identity.getUserId());
			teacherNotice.setTeacher(teacher);
			messageService.saveTeacherNotice(teacherNotice);
			return "teacher";
		} else if (identity.getUserType().equals("business")) {
			// 企业发布公告
			BusinessNotice businessNotice = new BusinessNotice();
			businessNotice.setMessage(messageInfo);
			businessNotice.setTitle(title);
			businessNotice.setDate(date);
			Business business = new Business();
			business.setId(identity.getUserId());
			businessNotice.setBusiness(business);
			messageService.saveBusinessNotice(businessNotice);
			return "business";
		}
		return "login";
	}

	/**
	 * 遍历学生公告
	 * 
	 * @return
	 */
	@Action(value = "listStudentMessage", results = { @Result(name = "success", location = "/Functionality/record.jsp") })
	public String listStudentMessage() {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");

		if (identity.getUserType().equals("student")) {
			Relation relation = new Relation();
			relation.setSid(identity.getUserId());
			List<Relation> relations = studentService.search(relation);
			if (relations.size() > 0) {
				getStudentMessages(relations);
			}
			isShow = true;
		} else if (identity.getUserType().equals("teacher")) {
			Relation relation = new Relation();
			relation.setTid(identity.getUserId());
			List<Relation> relations = teacherService.search(relation);
			if (relations.size() > 0) {
				getStudentMessages(relations);
			}
		} else if (identity.getUserType().equals("business")) {
			Relation relation = new Relation();
			relation.setBid(identity.getUserId());
			List<Relation> relations = businessService.search(relation);
			if (relations.size() > 0) {
				getStudentMessages(relations);
			}
		} else if (identity.getUserType().equals("parent")) {
			Relation relation = new Relation();
			relation.setPid(identity.getUserId());
			List<Relation> relations = parentService.search(relation);
			if (relations.size() > 0) {
				getStudentMessages(relations);
			}
		}
		ServletActionContext.getRequest().setAttribute("pageResults", pageResults);
		ServletActionContext.getRequest().setAttribute("method", "listStudentMessage");
		ServletActionContext.getRequest().setAttribute("isShow", isShow);
		ServletActionContext.getRequest().setAttribute("type", "实习记录");
		return SUCCESS;
	}

	/**
	 * 识别不同身份并 获取所有相关动态及公告
	 * 
	 * @return
	 */
	@Action(value = "decide", results = { @Result(name = "success", location = "/Functionality/shouye.jsp") })
	public String decide() {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		List<Relation> relations = null;
		if (identity.getUserType().equals("student")) {
			Relation relation = new Relation();
			relation.setSid(identity.getUserId());
			relations = studentService.search(relation);
		} else if (identity.getUserType().equals("teacher")) {
			Relation relation = new Relation();
			relation.setTid(identity.getUserId());
			relations = teacherService.search(relation);
		} else if (identity.getUserType().equals("business")) {
			Relation relation = new Relation();
			relation.setBid(identity.getUserId());
			relations = businessService.search(relation);
		} else if (identity.getUserType().equals("parent")) {
			Relation relation = new Relation();
			relation.setPid(identity.getUserId());
			relations = parentService.search(relation);
		}
		if (relations.size() > 0) {
			getBusinessNotices(relations);
			getStudentMessages(relations);
			getTeacherNotices(relations);
		}
		ServletActionContext.getRequest().setAttribute("pageResults", pageResults);
		return SUCCESS;
	}

	/**
	 * 获取所有学生动态
	 * 
	 * @param relations
	 */
	private void getStudentMessages(List<Relation> relations) {
		Set<Integer> sids = new HashSet<Integer>();
		for (Relation relation : relations) {
			sids.add(relation.getSid());
		}
		PageResult<Message> pageResult = studentService.paging("s_message", this.getPageNo(), this.getPageSize(), sids, "student_id");
		pageResults.add(pageResult);
	}

	/**
	 * 获取所有企业公告
	 * 
	 * @param relations
	 */
	private void getBusinessNotices(List<Relation> relations) {
		Set<Integer> bids = new HashSet<Integer>();
		for (Relation relation : relations) {
			bids.add(relation.getBid());
		}
		PageResult<BusinessNotice> pageResult = businessService.paging("b_notice", this.getPageNo(), this.getPageSize(), bids, "business_id");
		pageResults.add(pageResult);
	}

	/**
	 * 获取所有导师公告
	 * 
	 * @param relations
	 */
	private void getTeacherNotices(List<Relation> relations) {
		Set<Integer> tids = new HashSet<Integer>();

		for (Relation relation : relations) {
			tids.add(relation.getTid());
		}
		PageResult<TeacherNotice> pageResult = teacherService.paging("t_notice", this.getPageNo(), this.getPageSize(), tids, "teacher_id");
		pageResults.add(pageResult);
	}

	public String getMessageInfo() {
		return messageInfo;
	}

	public void setMessageInfo(String messageInfo) {
		this.messageInfo = messageInfo;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
}
