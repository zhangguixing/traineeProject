package com.trainee.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.BusinessNotice;
import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.TeacherNotice;
import com.trainee.service.BaseService;
import com.trainee.service.IMessageService;

@SuppressWarnings("all")
@Service
@Transactional
public class MessageService extends BaseService implements IMessageService {
	/**
	 * 查询学生所有动态
	 */
	@Override
	public List<Message> search(Message message) {
		return messageDao.search(message);
	}

	@Override
	public void delete(Integer id) {
		messageDao.delete(id);
	}

	/*
	 * @Override public List<Relation> search(Relation relation) { return
	 * messageDao.search(relation); }
	 */
	@Override
	public <T> T findById(String name, Integer id) {
		return messageDao.findById(name, id);
	}

	@Override
	public void saveMessage(Message message) {
		messageDao.save(message);
	}

	@Override
	public void saveBusinessNotice(BusinessNotice businessNotice) {
		businessDao.save(businessNotice);
	}

	@Override
	public void saveTeacherNotice(TeacherNotice teacherNotice) {
		teacherDao.save(teacherNotice);
	}

	@Override
	public PageResult paging(String tableName, int pageNo, int pageSize, Set otherIds, String otherName) {
		return messageDao.paging(tableName, pageNo, pageSize, otherIds, otherName);
	}

	@Override
	public void deleteDisByOtherId(String otherName, Integer otherId) {
		messageDao.deleteDisByOtherId(otherName, otherId);
	}
}
