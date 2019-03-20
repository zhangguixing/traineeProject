package com.trainee.dao;

import java.util.List;

import com.trainee.domain.Relation;

public interface IParentDao {
	/**
	 * 通过对应关系查询
	 * @param relation
	 * @return
	 */
	public List<Relation> search(Relation relation);



}
