package com.FirstProject.model.dao;

import java.util.ArrayList;
import java.util.List;

import com.FirstProject.model.bean.Wire;

public class CheckLoginDAO {
	
	public List<Wire> createUser(){
		List<Wire> users = new ArrayList<>();
		
		Wire user1 = new Wire("chi phep", "123456", false);
		Wire user2 = new Wire("Thị nở", "123456", true);
		
		users.add(user1);
		users.add(user2);
		
		return users;
	}
	public boolean isValidUser(String userName, String password) {
		return true;
	}
	
}
