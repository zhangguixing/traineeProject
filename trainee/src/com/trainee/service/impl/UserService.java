package com.trainee.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.dao.IUserDao;
import com.trainee.service.IUserService;
@Transactional
@Service
public class UserService implements IUserService{
	@Resource
	private IUserDao userDao;
	
	@Override
	public <T> void save(T t) {
		userDao.save(t);
	}

	@Override
	public <T> T search(T t) {
		return userDao.search(t);
	}

	@Override
	public <T> T update(T t) {
		userDao.update(t);
		return userDao.search(t);
	}
}
