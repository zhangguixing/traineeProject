package com.trainee.dao.impl;

import java.util.List;

import com.trainee.dao.RecruitInfoDao;
import com.trainee.domain.Recruitment;

public class RecruitInfoDaoImpl extends BaseDao<Recruitment> implements RecruitInfoDao {

	/**
	 * 获取所有招聘信息
	 */
	public List<Recruitment> getAll() {
		return getHibernateTemplate().find("FROM Recruitment ORDER BY DESC");
	}

}
