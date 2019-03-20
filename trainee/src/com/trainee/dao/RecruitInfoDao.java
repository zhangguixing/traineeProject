package com.trainee.dao;

import java.util.List;

import com.trainee.domain.Recruitment;

public interface RecruitInfoDao extends IBaseDao<Recruitment>{

	public List<Recruitment> getAll();
	
}
