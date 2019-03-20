package com.trainee.service;


public interface IUserService {

	/**
	 * 查询用户详情
	 * @param <T>
	 * 
	 * @param 查询的实体
	 * @param user
	 *            查询依据
	 * @return 查询结果
	 */
	<T> T search(T t);
	
	/**
	 * 保存用户信息
	 * @param t
	 */
	<T> void save(T t);

	/**
	 * 更新用户信息
	 * @param t
	 * @return
	 */
	<T> T update(T t);
}
