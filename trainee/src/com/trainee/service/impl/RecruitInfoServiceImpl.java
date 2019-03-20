package com.trainee.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.trainee.dao.RecruitInfoDao;
import com.trainee.domain.Recruitment;
import com.trainee.service.RecruitInfoService;

public class RecruitInfoServiceImpl implements RecruitInfoService{
	@Autowired
	private RecruitInfoDao recruitInfoDao;
	@Override
	public List<Recruitment> getAllInfo() {
		return recruitInfoDao.getAll();
	}

}
