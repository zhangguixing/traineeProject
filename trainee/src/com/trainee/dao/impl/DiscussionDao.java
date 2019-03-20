package com.trainee.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.IDiscussionDao;
import com.trainee.domain.Discussion;
import com.trainee.domain.Message;

@SuppressWarnings("all")
@Repository
public class DiscussionDao extends BaseDao<Discussion> implements IDiscussionDao{
	@Override
	public <T> T findById(String name, Integer id) {
		 List<T> list = hibernateTemplate.find("from " +name +" where id=?",id);
		 if(list.size()>0){
			 return  list.get(0);
		 }
		 return null;
	}

	@Override
	public List<Discussion> findDiscussion(Message message) {
		return hibernateTemplate.find("from Discussion where message=?",message);
	}
	
}
