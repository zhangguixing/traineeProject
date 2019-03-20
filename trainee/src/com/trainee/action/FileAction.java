package com.trainee.action;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.trainee.domain.Course;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.utils.Identity;

@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
@SuppressWarnings("all")
public class FileAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	private Integer id;

	/**
	 * 文件显示
	 * 
	 * @return
	 */
	@Action(value = "showFile", results = { @Result(name = "success", location = "/Functionality/video.jsp") })
	public String showFile() {
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
		} else if (identity.getUserType().equals("parent")) {
			relation.setPid(identity.getUserId());
			relations = parentService.search(relation);
		}
		Set<Integer> tids = new HashSet<Integer>();

		for (Relation relation1 : relations) {
			tids.add(relation1.getTid());
		}
		PageResult<Course> pageResult = courseService.paging("course", getPageNo(), getPageSize(), tids, "teacher_id");
		
		Logger log = Logger.getLogger(Object.class);
		
		ServletActionContext.getRequest().setAttribute("pageResult", pageResult);
		return SUCCESS;
	}
	/**
	 * 根据主键删除文件
	 * @return
	 */
	@Action(value = "deleteFile", results = {@Result(name="success",location="showFile", type = "redirect")})
	public String deleteFile() {
		courseService.deleteFile(id);
		return SUCCESS;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
}
