package com.trainee.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table
public class Teacher {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String username;
	private String password;
	private String image;
	@OneToMany(targetEntity=TeacherNotice.class,mappedBy="teacher",fetch=FetchType.LAZY)
	@Cascade(value={CascadeType.ALL})
	private Set<TeacherNotice> teacherNotices = new HashSet<TeacherNotice>();
	
	public Set<TeacherNotice> getTeacherNotices() {
		return teacherNotices;
	}
	public void setTeacherNotices(Set<TeacherNotice> teacherNotices) {
		this.teacherNotices = teacherNotices;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}
