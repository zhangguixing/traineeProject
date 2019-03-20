package com.trainee.service;

import java.util.List;

import com.trainee.domain.Discussion;
import com.trainee.domain.Message;

public interface IDiscussionService {
	/**
	 * 发表评论
	 * @param discussion
	 */
	void save(Discussion discussion );
	/**
	 * 根据主键查找
	 * @param <T>
	 * @param class1 
	 * @param bid
	 * @return
	 */
	<T> T findById(String name, Integer id);
	/**
	 * 根据message（外键）查找查询信息
	 * @param message
	 * @return
	 */
	List<Discussion> findDisscussion(Message message);

}
