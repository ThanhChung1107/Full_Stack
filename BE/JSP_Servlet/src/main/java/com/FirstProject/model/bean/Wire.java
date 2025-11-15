package com.FirstProject.model.bean;

public class Wire {
	private String username;
	private String address;
	private boolean alive;
	public Wire(String username, String address, boolean alive) {
		super();
		this.username = username;
		this.address = address;
		this.alive = alive;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public boolean isAlive() {
		return alive;
	}
	public void setAlive(boolean alive) {
		this.alive = alive;
	}
	
	
	
}
