package com.trainee.service;

import java.util.List;
import java.util.Set;

import com.trainee.domain.BusinessNotice;
import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.TeacherNotice;

public interface IMessageService {

	/**
	 * 保存实习记录
	 * 
	 * @param massage
	 *            记录信息
	 */
	void saveMessage(Message message);

	/**
	 * 查询学生所有动态
	 * 
	 * @param message
	 * @return
	 */
	List<Message> search(Message message);

	/**
	 * 根据主键删除动态
	 * 
	 * @param id
	 */
	void delete(Integer id);

	/*	*//**
	 * 根据关系查询动态
	 * 
	 * @param relation
	 * @return
	 */
	/*
	 * List<Relation> search(Relation relation);
	 */

	/**
	 * 根据id查找Business
	 * 
	 * @param <T>
	 * @param class1
	 * @param bid
	 * @return
	 */
	<T> T findById(String name, Integer id);

	/**
	 * 企业发表动态
	 */
	void saveBusinessNotice(BusinessNotice businessNotice);

	/**
	 * 老师发表公告
	 */
	void saveTeacherNotice(TeacherNotice teacherNotice);

	/**
	 * 分页
	 * 
	 * @param tableName
	 * @param pageNo
	 * @param pageSize
	 * @param otherIds
	 * @param otherName
	 * @return
	 */
	PageResult<Message> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);

	public void deleteDisByOtherId(String otherName, Integer otherId);
}
