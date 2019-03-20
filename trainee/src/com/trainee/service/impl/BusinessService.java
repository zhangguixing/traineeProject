package com.trainee.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.BusinessNotice;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;
import com.trainee.service.BaseService;
import com.trainee.service.IBusinessService;

@Service
@Transactional
public class BusinessService extends BaseService<BusinessNotice> implements IBusinessService {

	/**
	 * 获取所有相关企业公告
	 */
	@Override
	public List<BusinessNotice> search(BusinessNotice businessNotice) {
		return businessDao.search(businessNotice);
	}

	@Override
	public void delete(Integer id) {
		businessDao.delete(id);
	}

	/**
	 * 企业发表公告
	 */

	@Override
	public List<Relation> search(Relation relation) {
		return businessDao.search(relation);
	}

	/**
	 * 分页
	 */
	public PageResult<BusinessNotice> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		return businessDao.paging(tableName, pageNo, pageSize, otherIds, otherName);
	}
}
