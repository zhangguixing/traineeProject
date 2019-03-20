package com.trainee.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.Course;
import com.trainee.domain.PageResult;
import com.trainee.domain.Teacher;
import com.trainee.service.BaseService;
import com.trainee.service.ICourseService;
@Service
@Transactional
public class CourseService extends BaseService<Course> implements ICourseService{

	@Override
	public void save(Course course) {
		courseDao.save(course);
	}

	@Override
	public Teacher findById(Integer userId) {
		return courseDao.findById(userId);
	}
	@Override
	public List<Course> findByTeacher(Teacher teacher) {
		return courseDao.findByTeacher(teacher);
	}

	@Override
	public PageResult<Course> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		return courseDao.paging(tableName, pageNo, pageSize, otherIds, otherName);
	}

	@Override
	public void deleteFile(Integer id) {
		courseDao.delete(id);
	}
	
}
