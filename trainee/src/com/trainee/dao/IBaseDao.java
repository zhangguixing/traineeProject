package com.trainee.dao;

import java.util.List;
import java.util.Set;

import com.trainee.domain.PageResult;

public interface IBaseDao<T> {

	/**
	 * 保存对象
	 * 
	 * @param t
	 *            对象
	 */
	void save(T t);

	/**
	 * 修改对象信息
	 * 
	 * @param t
	 */
	void update(T t);

	/**
	 * 根据主键删除
	 * 
	 * @param id
	 */
	void delete(Integer id);

	/**
	 * 查询所有
	 * 
	 * @return
	 */
	List<T> getAll(T t);

	/**
	 * 三个公告一个课程公用这个方法
	 * 
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public PageResult paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);
}
