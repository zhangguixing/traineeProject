package com.trainee.dao;

import java.util.List;

import com.trainee.domain.Discussion;
import com.trainee.domain.Message;

public interface IDiscussionDao {
	/**
	 * 发表评论
	 * @param <T>
	 * @return
	 */
	 void save(Discussion discussion);
	 /**
	  * 主键查找用户信息
	  * @param name
	  * @param id
	  * @return
	  */
	<T> T findById(String name, Integer id);
	
	/**
	 * 通过message（外键）查询评论信息
	 * @return
	 */
	List<Discussion> findDiscussion(Message message);
}
