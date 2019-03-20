package com.trainee.dao.impl;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;

import com.trainee.dao.IBaseDao;
import com.trainee.domain.Course;
import com.trainee.domain.PageResult;
import com.trainee.domain.Teacher;

@SuppressWarnings("all")
public class BaseDao<T> implements IBaseDao<T> {

	// 当前操作的实际值
	private Class<T> clazz;
	// 获取类的名称
	private String className;

	// 反射泛型
	@SuppressWarnings("unchecked")
	public BaseDao() {
		Type type = this.getClass().getGenericSuperclass();
		// 转化为参数化类型
		ParameterizedType pt = (ParameterizedType) type; // BaseDao<UserDao>
		// 得到实际类型
		Type[] types = pt.getActualTypeArguments();
		// 获取实际类型
		clazz = (Class<T>) types[0];

		className = clazz.getSimpleName(); // User
	}

	@Autowired
	protected HibernateTemplate hibernateTemplate;

	@Autowired
	protected SessionFactory sessionFactory;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	@Resource
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	@Resource
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void save(T t) {
		sessionFactory.getCurrentSession().save(t);
	}

	@Override
	public void update(T t) {
		sessionFactory.getCurrentSession().update(t);
	}

	@Override
	public void delete(Integer id) {
		sessionFactory.getCurrentSession().createQuery("delete from " + className + " where id=?").setParameter(0, id).executeUpdate();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> getAll(T t) {
		return hibernateTemplate.findByExample(t);
	}

	@SuppressWarnings("unchecked")
	public List<Course> findByTeacher(Teacher teacher) {
		return hibernateTemplate.find("from Course where teacher=?", teacher);
	}

	@Override
	public PageResult<T> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName) {
		if (otherIds.size() > 0) {
			Integer[] arr = new Integer[otherIds.size()];
			otherIds.toArray(arr);
			String idSql = "" + arr[0];
			if (arr.length > 1) {
				for (int i = 1; i < arr.length; i++) {
					idSql += " or " + arr[i];
				}
			}
			BigInteger btotalCount = (BigInteger) sessionFactory.getCurrentSession().createSQLQuery("select Count(*) from " + tableName + " where " + otherName + "=" + idSql).list().get(0);
			int totalCount = btotalCount.intValue();
			List<T> items = (List<T>) sessionFactory.getCurrentSession().createSQLQuery("select * from " + tableName + " where " + otherName + "=" + idSql + " limit " + (pageNo - 1) * pageSize + "," + pageNo * pageSize).addEntity(clazz).list();
			return new PageResult<T>(totalCount, pageNo, pageSize, items);
		}
		return null;
	}
}