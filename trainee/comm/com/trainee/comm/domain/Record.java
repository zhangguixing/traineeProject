package com.trainee.comm.domain;

public class Record {
	private int id;
	private String message;
	private String from;
	private String datetime;
	private int userId;
	
	public String getDatetime() {
		return datetime;
	}
	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public int getId() {
		return id;
	}
	public String getMessage() {
		return message;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Record [id=" + id + ", message=" + message + ", from=" + from
				+ ", datetime=" + datetime + ", userId=" + userId + "]";
	}
	
	
}
