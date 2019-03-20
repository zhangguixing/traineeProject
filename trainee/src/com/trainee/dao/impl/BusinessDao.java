package com.trainee.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.IBusinessDao;
import com.trainee.domain.BusinessNotice;
import com.trainee.domain.Relation;

@SuppressWarnings("all")
@Repository
public class BusinessDao extends BaseDao<BusinessNotice> implements IBusinessDao {

	@Override
	public List<BusinessNotice> search(BusinessNotice businessNotice) {
		return hibernateTemplate.find("from BusinessNotice where business=?", businessNotice.getBusiness());
	}

	@SuppressWarnings("unchecked")
	public List<Relation> search(Relation relation) {
		List<Relation> list = hibernateTemplate.find("from Relation where bid=?", relation.getBid());
		return list;
	}
}
