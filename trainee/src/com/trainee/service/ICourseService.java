package com.trainee.service;

import java.util.List;
import java.util.Set;

import com.trainee.domain.Course;
import com.trainee.domain.PageResult;
import com.trainee.domain.Teacher;

public interface ICourseService {
	/**
	 * 保存上传视频
	 * 
	 * @param course
	 */
	void save(Course course);

	/**
	 * 根据主键查询导师
	 * 
	 * @param name
	 * @param userId
	 * @return
	 */
	Teacher findById(Integer userId);

	/**
	 * 通过老师id查询course
	 * 
	 * @param teacher
	 * @return
	 */
	List<Course> findByTeacher(Teacher teacher);

	/**
	 * 分页
	 * 
	 * @param tableName
	 * @param pageNo
	 * @param pageSize
	 * @param otherIds
	 * @param otherName
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	PageResult paging(String tableName, int pageNo, int pageSize, Set<Integer> otherIds, String otherName);
	/**
	 * 根据主键删除视频
	 */
	void deleteFile(Integer id);
}
