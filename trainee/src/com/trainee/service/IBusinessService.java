package com.trainee.service;

import java.util.List;
import java.util.Set;

import com.trainee.domain.BusinessNotice;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;

public interface IBusinessService {

	/**
	 * 获取所有公告
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
	 * 根据关系查询动态
	 * 
	 * @param relation
	 * @return
	 */
	List<Relation> search(Relation relation);

	/**
	 * 分页
	 * 
	 * @param string
	 * @param pageNo
	 * @param pageSize
	 * @param bids
	 * @param string2
	 * @return
	 */
	PageResult<BusinessNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);

}
