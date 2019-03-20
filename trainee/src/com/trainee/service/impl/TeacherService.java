package com.trainee.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.domain.TeacherNotice;
import com.trainee.service.BaseService;
import com.trainee.service.ITeacherService;

@Service
@Transactional
public class TeacherService extends BaseService<TeacherNotice> implements ITeacherService {

	@Override
	public List<TeacherNotice> search(TeacherNotice teacherNotice) {
		return teacherDao.search(teacherNotice);
	}

	@Override
	public void delete(Integer id) {
		teacherDao.delete(id);
	}

	@Override
	public List<Relation> search(Relation relation) {
		return teacherDao.search(relation);
	}

	@Override
	public PageResult<TeacherNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		return teacherDao.paging(tableName, pageNo, pageSize, otherIds, otherName);
	}
}
