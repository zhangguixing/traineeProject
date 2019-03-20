package com.trainee.action;

import javax.annotation.Resource;

import com.opensymphony.xwork2.ActionSupport;
import com.trainee.service.IBusinessService;
import com.trainee.service.ICourseService;
import com.trainee.service.IDiscussionService;
import com.trainee.service.IMessageService;
import com.trainee.service.IParentService;
import com.trainee.service.IStudentService;
import com.trainee.service.ITeacherService;
import com.trainee.service.IUserService;

public abstract class BaseAction extends ActionSupport {
	int pageNo;// 当前页码默认为一
	int pageSize;
	private static final long serialVersionUID = 1L;
	@Resource
	protected IMessageService messageService;
	@Resource
	protected IUserService userService;
	@Resource
	protected IBusinessService businessService;
	@Resource
	protected ITeacherService teacherService;
	@Resource
	protected IStudentService studentService;
	@Resource
	protected IParentService parentService;
	@Resource
	protected IDiscussionService discussionService;
	@Resource
	protected ICourseService courseService;

	public int getPageNo() {
		if (pageNo == 0) {
			pageNo = 1;
		}
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public int getPageSize() {
		if (pageSize == 0) {
			return 6;
		}
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

}