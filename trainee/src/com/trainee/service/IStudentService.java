package com.trainee.service;

import java.util.List;
import java.util.Set;

import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;

public interface IStudentService {

	/**
	 * 查找学生所有动态
	 * 
	 * @param message
	 * @return
	 */
	List<Message> search(Message message);

	/**
	 * 根据关系查找关系映射
	 * 
	 * @param relation
	 * @return
	 */
	List<Relation> search(Relation relation);

	/**
	 * 
	 * @param tableName
	 * @param pageNo
	 * @param pageSize
	 * @param otherIds
	 * @param otherName
	 * @return
	 * 分页
	 */
	PageResult<Message> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);

}
