package com.trainee.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.service.BaseService;
import com.trainee.service.IStudentService;

@Service
@Transactional
public class StudentService extends BaseService<Message> implements IStudentService {

	@Override
	public List<Message> search(Message message) {
		return studentDao.search(message);
	}

	public List<Relation> search(Relation relation) {
		return studentDao.search(relation);
	}

	@Override
	public PageResult<Message> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		return messageDao.paging(tableName, pageNo, pageSize, otherIds, otherName);
	}
}
