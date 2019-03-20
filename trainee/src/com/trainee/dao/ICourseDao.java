package com.trainee.dao;

import java.util.List;
import java.util.Set;

import com.trainee.domain.Course;
import com.trainee.domain.PageResult;
import com.trainee.domain.Teacher;

public interface ICourseDao{
	/**
	 * 上传视频保存
	 */
	void save(Course course);

	/**
	 * 主键查询导师
	 * @param name 
	 * @param userId
	 * @return
	 */
	Teacher findById(Integer userId);
	/**
	 * 根据teacher的ID查询Course
	 * @param teacher
	 * @return
	 */
	List<Course> findByTeacher(Teacher teacher);

	PageResult<Course> paging(String tableName, int pageNo, int pageSize,
			Set<Integer> otherIds, String otherName);
	/**
	 * 根据主键删除视频
	 * @param id
	 */
	void delete(Integer id);
}
