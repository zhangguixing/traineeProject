package com.trainee.service;

import java.util.List;
import java.util.Set;

import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.domain.TeacherNotice;

public interface ITeacherService {

	/**
	 * 查找Teacher的所有公告
	 * @param teacherNotice
	 * @return
	 */
	List<TeacherNotice> search(TeacherNotice teacherNotice);

	/**
	 * 根据主键删除导师公告
	 * @param id
	 */
	void delete(Integer id);
	
	/**
	 * 根据关系查找动态
	 * @param relation
	 * @return
	 */
	public List<Relation> search(Relation relation);
	/**
	 * 分页
	 * @param string
	 * @param pageNo
	 * @param pageSize
	 * @param tids
	 * @param string2
	 * @return
	 */
	PageResult<TeacherNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);



}
