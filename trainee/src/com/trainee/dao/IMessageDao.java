package com.trainee.dao;

import java.util.List;
import java.util.Set;

import com.trainee.domain.Message;
import com.trainee.domain.PageResult;
import com.trainee.domain.Relation;

public interface IMessageDao {

	/**
	 * 保存对象
	 * 
	 * @param t
	 *            对象
	 */
	void save(Message message);

	/**
	 * 修改对象信息
	 * 
	 * @param t
	 */
	void update(Message message);

	/**
	 * 根据主键删除
	 * 
	 * @param id
	 */
	void delete(Integer id);

	/**
	 * 查询所有
	 * 
	 * @return
	 */
	List<Message> getAll(Message message);

	/**
	 * 根据主键查询
	 * 
	 * @param id
	 * @return
	 */
	// Message findById(int id);

	/**
	 * 查询学生所有动态
	 * 
	 * @param message
	 * @return
	 */
	List<Message> search(Message message);

	/**
	 * 查询关系映射
	 * 
	 * @param relation
	 * @return
	 */
	List<Relation> search(Relation relation);

	/**
	 * 通过id查找
	 * 
	 * @param name
	 * @param id
	 * @return
	 */
	<T> T findById(String name, Integer id);

	PageResult<Message> paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);

	public void deleteDisByOtherId(String otherName, Integer otherId);
}
