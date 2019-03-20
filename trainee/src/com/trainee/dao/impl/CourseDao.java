package com.trainee.dao.impl;


import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.ICourseDao;
import com.trainee.domain.Course;
import com.trainee.domain.Teacher;
@Repository

public class CourseDao extends BaseDao<Course> implements ICourseDao{

	@Override
	public Teacher findById(Integer userId) {
		@SuppressWarnings("unchecked")
		List<Teacher> list = hibernateTemplate.find("from Teacher where id=?",userId);
		if(list.size()>0){
			return list.get(0);
		}
		return null;
	}


	@SuppressWarnings("unchecked")
	public List<Course> findCourseByTeacherId(Integer teacherId) {
		return hibernateTemplate.find("from Course where teacher=?",teacherId);
	}
}
