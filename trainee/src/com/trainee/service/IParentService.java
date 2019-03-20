package com.trainee.service;

import java.util.List;

import com.trainee.domain.Relation;

public interface IParentService {
	/**
	 * 根据关系查询动态
	 * @param relation
	 * @return 
	 */
	List<Relation> search(Relation relation);
}
