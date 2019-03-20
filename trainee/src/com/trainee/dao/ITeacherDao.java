package com.trainee.dao;

import java.util.List;
import java.util.Set;

import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.domain.TeacherNotice;

public interface ITeacherDao {

	/**
	 * 查询所用导师公告
	 * 
	 * @param teacherNotice
	 * @return
	 */
	List<TeacherNotice> search(TeacherNotice teacherNotice);

	/**
	 * 主键删除公告
	 * 
	 * @param id
	 */
	void delete(Integer id);

	/**
	 * 老师发表动态
	 * 
	 * @param teacherNotice
	 */

	void save(TeacherNotice teacherNotice);

	/**
	 * 通过对应关系查询动态
	 * 
	 * @param relation
	 * @return
	 */
	public List<Relation> search(Relation relation);

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
	PageResult<TeacherNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);

}
