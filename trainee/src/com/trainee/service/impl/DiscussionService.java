package com.trainee.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.Discussion;
import com.trainee.domain.Message;
import com.trainee.service.BaseService;
import com.trainee.service.IDiscussionService;

@SuppressWarnings("rawtypes")
@Transactional
@Service
public class DiscussionService extends BaseService implements IDiscussionService {

	@Override
	public void save(Discussion discussion) {
		discussionDao.save(discussion);
	}

	@Override
	public <T> T findById(String name, Integer id) {
		return discussionDao.findById(name, id);
	}

	@Override
	public List<Discussion> findDisscussion(Message message) {
		return discussionDao.findDiscussion(message);
	}

}
