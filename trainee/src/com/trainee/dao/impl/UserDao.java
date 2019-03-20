package com.trainee.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.trainee.dao.IUserDao;

@SuppressWarnings("all")
@Repository
public class UserDao implements IUserDao{
	@Resource
	private HibernateTemplate hibernateTemplate;
	
	public <T> void update(T t) {
		hibernateTemplate.update(t);
	}
	
	public <T> T search(T t) {
		List<T> list = hibernateTemplate.findByExample(t);
		if(list.size()>0){
			return list.get(0); 
		}
		return null;
	}

	@Override
	public <T> T save(T t) {
		hibernateTemplate.save(t);
		return (T)hibernateTemplate.find("from "+t.getClass().getName()).get(0);
		
		
	}
}
