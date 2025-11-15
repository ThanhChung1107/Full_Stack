package com.FirstProject.model.bo;

import java.util.List;

import com.FirstProject.model.bean.Wire;
import com.FirstProject.model.dao.CheckLoginDAO;

public class CheckLoginBO {
	private CheckLoginDAO dao = new CheckLoginDAO();
	public boolean isValidUser(String username, String password){
		return dao.isValidUser(username, password);
	}
	
	public List<Wire> getUset(){
		return dao.createUser();
	}
}	
