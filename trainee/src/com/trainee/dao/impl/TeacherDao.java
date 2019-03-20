package com.trainee.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.ITeacherDao;
import com.trainee.domain.Relation;
import com.trainee.domain.TeacherNotice;

@SuppressWarnings("all")
@Repository
public class TeacherDao extends BaseDao<TeacherNotice> implements ITeacherDao {

	@Override
	public List<TeacherNotice> search(TeacherNotice teacherNotice) {
		return hibernateTemplate.find("from TeacherNotice where teacher=?", teacherNotice.getTeacher());
	}

	@Override
	public List<Relation> search(Relation relation) {
		return hibernateTemplate.find("from Relation where tid=?", relation.getTid());
	}
}
