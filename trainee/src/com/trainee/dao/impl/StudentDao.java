package com.trainee.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.IStudentDao;
import com.trainee.domain.Course;
import com.trainee.domain.Message;
import com.trainee.domain.Relation;
import com.trainee.domain.Teacher;
@SuppressWarnings("all")
@Repository
public class StudentDao extends BaseDao<Message> implements IStudentDao {

	@Override
	public List<Message> search(Message message) {
		return hibernateTemplate.find("from Message where student=?",message.getStudent());
	}
	@SuppressWarnings("unchecked")
	public List<Relation> search(Relation relation) {
		List<Relation> list = hibernateTemplate.find("from Relation where sid=?", relation.getSid());
		return list;
	}
	

}
