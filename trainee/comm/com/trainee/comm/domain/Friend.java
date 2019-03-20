package com.trainee.comm.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Entity;

@Entity
@Table
public class Friend {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private int online; 	
	public Friend(int id, String name, int online) {
		super();
		this.id = id;
		this.name = name;
		this.online = online;
	}
	
	public Friend() {
		super();
	}

	public int getOnline() {
		return online;
	}
	public void setOnline(int online) {
		this.online = online;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Friend [id=" + id + ", name=" + name + ", online=" + online
				+ "]";
	}
	
}
