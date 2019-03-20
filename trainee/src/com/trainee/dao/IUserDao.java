package com.trainee.dao;


public interface IUserDao {

	/**
	 * 验证用户是否存在
	 * @param <T>
	 * 
	 * @param <T>
	 * @param user
	 *            用户信息
	 * @return 查询用户结果
	 */
	<T> T search(T t);
	/**
	 * 注册
	 * @param t
	 * @return
	 */
	<T> T save(T t);
	
	/**
	 * 更新用户信息
	 * 
	 * @param t
	 */
	<T> void update(T t);
}
