package com.trainee.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.trainee.domain.Business;
import com.trainee.domain.BusinessNotice;
import com.trainee.domain.Discussion;
import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.Parent;
import com.trainee.domain.Relation;
import com.trainee.domain.Student;
import com.trainee.domain.Teacher;
import com.trainee.domain.TeacherNotice;
import com.trainee.utils.Identity;

@SuppressWarnings("all")
@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
public class DiscussionAction extends BaseAction {
	// 发表的信息
	private String info;
	private Integer id;
	private String target;

	@Action(value = "publishDiscussion", results = { @Result(location = "findDiscussion?id=${id}", params = { "target", "${target}" }, name = "success", type = "redirect") })
	public String publishDiscussion() throws Exception {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		Discussion discussion = new Discussion();
		Message message = discussionService.findById(Message.class.getSimpleName(), id);
		discussion.setDate(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
		discussion.setInfo(info);
		discussion.setMessage(message);
		if (identity.getUserType().equals("student")) {
			// 学生发表评论
			Student student = discussionService.findById(Student.class.getSimpleName(), identity.getUserId());
			discussion.setImage(student.getImage());
			discussion.setName(student.getName());
			discussionService.save(discussion);
		} else if (identity.getUserType().equals("teacher")) {
			// 学校发布评论
			Teacher teacher = discussionService.findById(Teacher.class.getSimpleName(), identity.getUserId());
			discussion.setImage(teacher.getImage());
			discussion.setName(teacher.getName());
			discussionService.save(discussion);
		} else if (identity.getUserType().equals("business")) {
			// 企业发布评论
			Business business = discussionService.findById(Business.class.getSimpleName(), identity.getUserId());
			discussion.setImage(business.getImage());
			discussion.setName(business.getName());
			discussionService.save(discussion);
		}
		return SUCCESS;
	}

	@Action(value = "findDiscussion", results = { @Result(location = "/Functionality/check_record.jsp", name = "success") })
	public String findDiscussion() throws Exception {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		Relation relation = new Relation();
		List<Relation> relations = null;
		if (identity.getUserType().equals("student")) {
			relation.setSid(identity.getUserId());
			relations = studentService.search(relation);
		} else if (identity.getUserType().equals("teacher")) {
			relation.setTid(identity.getUserId());
			relations = teacherService.search(relation);
		} else if (identity.getUserType().equals("business")) {
			relation.setBid(identity.getUserId());
			relations = businessService.search(relation);
		} else {
			relation.setPid(identity.getUserId());
			relations = parentService.search(relation);
		}
		if (target.equals("实习记录")) {
			Message message = discussionService.findById(Message.class.getSimpleName(), id);
			// 获取实习记录
			getStudentMessages(relations);
			List<Discussion> disscussions = discussionService.findDisscussion(message);
			ServletActionContext.getRequest().setAttribute("disscussions", disscussions);
			ServletActionContext.getRequest().setAttribute("message", message);
		} else if (target.equals("学校公告")) {
			// 获取老师公告
			getTeacherNotices(relations);
			TeacherNotice message = discussionService.findById(TeacherNotice.class.getSimpleName(), id);
			ServletActionContext.getRequest().setAttribute("message", message);
		} else {
			// 获取企业公告
			getBusinessNotices(relations);
			BusinessNotice message = discussionService.findById(BusinessNotice.class.getSimpleName(), id);
			ServletActionContext.getRequest().setAttribute("message", message);
		}
		String name = null;
		if (identity.getUserType().equals("student")) {
			Student student = discussionService.findById(Student.class.getSimpleName(), identity.getUserId());
			name = student.getName();
		} else if (identity.getUserType().equals("teacher")) {
			Teacher teacher = discussionService.findById(Teacher.class.getSimpleName(), identity.getUserId());
			name = teacher.getName();
		} else if (identity.getUserType().equals("business")) {
			Business business = discussionService.findById(Business.class.getSimpleName(), identity.getUserId());
			name = business.getName();
		} else if (identity.getUserType().equals("parent")) {
			Parent parent = discussionService.findById(Parent.class.getSimpleName(), identity.getUserId());
			name = parent.getName();
		}
		ServletActionContext.getRequest().setAttribute("name", name);
		ServletActionContext.getRequest().setAttribute("messageId", id);
		return SUCCESS;
	}

	/**
	 * 获取企业公告目录
	 * 
	 * @param relations
	 */
	private void getBusinessNotices(List<Relation> relations) {
		Set<Integer> bids = new HashSet<Integer>();
		for (Relation relation : relations) {
			bids.add(relation.getBid());
		}
		PageResult<BusinessNotice> pageResult = businessService.paging("b_notice", getPageNo(), getPageSize(), bids, "business_id");
		ServletActionContext.getRequest().setAttribute("pageResult", pageResult);
	}

	/**
	 * 查询老师公告目录
	 * 
	 * @param relations
	 */
	private void getTeacherNotices(List<Relation> relations) {
		Set<Integer> tids = new HashSet<Integer>();
		for (Relation relation : relations) {
			tids.add(relation.getTid());
		}
		PageResult<TeacherNotice> pageResult = teacherService.paging("t_notice", getPageNo(), getPageSize(), tids, "teacher_id");
		ServletActionContext.getRequest().setAttribute("pageResult", pageResult);
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
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
		PageResult<Message> pageResult = messageService.paging("s_message", getPageNo(), getPageSize(), sids, "student_id");
		ServletActionContext.getRequest().setAttribute("pageResult", pageResult);
	}
}
