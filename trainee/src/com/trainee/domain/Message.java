package com.trainee.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "s_message")
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	@Column(columnDefinition = "text")
	private String message;
	private String date;
	@OneToMany(targetEntity = Discussion.class, mappedBy = "message", fetch = FetchType.EAGER)
	@Cascade(value = { CascadeType.ALL })
	private Set<Discussion> discussions = new HashSet<Discussion>();
	@ManyToOne(targetEntity = Student.class)
	private Student student;

	public String getTitle() {
		return title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Set<Discussion> getDiscussions() {
		return discussions;
	}

	public void setDiscussions(Set<Discussion> discussions) {
		this.discussions = discussions;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", title=" + title + ", message=" + message + ", date=" + date + " ]";
	}

}
