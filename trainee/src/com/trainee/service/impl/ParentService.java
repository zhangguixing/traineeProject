package com.trainee.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainee.domain.Relation;
import com.trainee.service.BaseService;
import com.trainee.service.IParentService;

@SuppressWarnings("rawtypes")
@Transactional
@Service
public class ParentService extends BaseService implements IParentService {

	@Override
	public List<Relation> search(Relation relation) {
		return parentDao.search(relation);
	}

}
