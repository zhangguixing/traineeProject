package com.trainee.service;

import java.util.Set;

import javax.annotation.Resource;

import com.trainee.dao.IBusinessDao;
import com.trainee.dao.ICourseDao;
import com.trainee.dao.IDiscussionDao;
import com.trainee.dao.IMessageDao;
import com.trainee.dao.IParentDao;
import com.trainee.dao.IStudentDao;
import com.trainee.dao.ITeacherDao;
import com.trainee.domain.PageResult;

public abstract class BaseService<T> {

	@Resource
	protected IMessageDao messageDao;
	@Resource
	protected IBusinessDao businessDao;
	@Resource
	protected ITeacherDao teacherDao;
	@Resource
	protected IStudentDao studentDao;
	@Resource
	protected IParentDao parentDao;
	@Resource
	protected IDiscussionDao discussionDao;
	@Resource
	protected ICourseDao courseDao;

	public PageResult<T> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		return null;
	}
}