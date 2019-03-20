package com.trainee.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.trainee.dao.IMessageDao;
import com.trainee.domain.Message;
import com.trainee.domain.Relation;

@SuppressWarnings("all")
@Repository
public class MessageDao extends BaseDao<Message> implements IMessageDao {

	/**
	 * 查询学生所有动态
	 */
	@Override
	public List<Message> search(Message message) {
		return hibernateTemplate.find("from Message where student=?", message.getStudent());
	}

	@Override
	public List<Relation> search(Relation relation) {
		List<Relation> list = hibernateTemplate.find("from Relation where sid=?", relation.getSid());
		return list;
	}

	@Override
	public <T> T findById(String name, Integer id) {
		List<T> list = hibernateTemplate.find("from " + name + " where id=?", id);
		if (list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public void deleteDisByOtherId(String otherName, Integer otherId) {
		sessionFactory.getCurrentSession().createSQLQuery("delete from discussion where " + otherName + "=" + otherId).executeUpdate();
	}
}
