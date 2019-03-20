package com.trainee.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.trainee.dao.IParentDao;
import com.trainee.domain.Parent;
import com.trainee.domain.Relation;
@SuppressWarnings("all")
@Repository
public class ParentDao extends BaseDao<Parent> implements IParentDao{
	
	public List<Relation> search(Relation relation) {
		@SuppressWarnings("unchecked")
		List<Relation> list = hibernateTemplate.find("from Relation where pid=?", relation.getPid());
		return list;
	}


}
