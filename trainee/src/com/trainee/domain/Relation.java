package com.trainee.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="s_b_p_t")
public class Relation {

	@Id
	@GeneratedValue
	private Integer sid;
	private Integer bid;
	private Integer pid;
	private Integer tid;
	
	public Integer getSid() {
		return sid;
	}
	public void setSid(Integer sid) {
		this.sid = sid;
	}
	public Integer getBid() {
		return bid;
	}
	public void setBid(Integer bid) {
		this.bid = bid;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public Integer getTid() {
		return tid;
	}
	public void setTid(Integer tid) {
		this.tid = tid;
	}
	@Override
	public String toString() {
		return "Relation [sid=" + sid + ", bid=" + bid + ", pid=" + pid
				+ ", tid=" + tid + "]";
	}
	
}
