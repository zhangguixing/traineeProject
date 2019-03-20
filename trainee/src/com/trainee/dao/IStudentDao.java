package com.trainee.dao;

import java.util.List;

import com.trainee.domain.Message;
import com.trainee.domain.Relation;

public interface IStudentDao {

	/**
	 * 查找学生所有动态
	 * @param message
	 * @return
	 */
	List<Message> search(Message message);
	/**
	 * 通过对应关系查询动态
	 * @param relation
	 * @return
	 */
	 List<Relation> search(Relation relation);

	
	 
}
