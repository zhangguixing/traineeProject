package com.trainee.dao;

import java.util.List;
import java.util.Set;

import com.trainee.domain.BusinessNotice;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;

public interface IBusinessDao {

	/**
	 * 获取所有相关企业公告
	 * 
	 * @param businessNotice
	 * @return
	 */
	List<BusinessNotice> getAll(BusinessNotice businessNotice);

	/**
	 * 通过对应关系查询公告
	 * 
	 * @param relation
	 * @return
	 */
	public List<Relation> search(Relation relation);

	/**
	 * 查询企业公告
	 * 
	 * @param businessNotice
	 * @return
	 */
	List<BusinessNotice> search(BusinessNotice businessNotice);

	/**
	 * 根据主键删除企业公告
	 * 
	 * @param id
	 */
	void delete(Integer id);

	/**
	 * 发表动态
	 */
	void save(BusinessNotice businessNotice);

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
	PageResult<BusinessNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);
}
