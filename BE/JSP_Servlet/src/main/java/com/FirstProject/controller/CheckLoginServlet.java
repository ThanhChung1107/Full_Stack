package com.FirstProject.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.FirstProject.model.bean.Wire;
import com.FirstProject.model.bo.CheckLoginBO;

@WebServlet("/login")
public class CheckLoginServlet extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
					throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String destination = null;
		
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        CheckLoginBO bo = new CheckLoginBO();
        List<Wire> users = new ArrayList<>();
        
        if(bo.isValidUser(username, password)) {
        	users = bo.getUset();
        	request.setAttribute("users", users);
        	destination = "/welcome.jsp";
        	RequestDispatcher rd = getServletContext().getRequestDispatcher(destination);
        	rd.forward(request, response);
        }
        else {
        	destination = "/login.jsp";
        	RequestDispatcher rd = getServletContext().getRequestDispatcher(destination);
        	rd.forward(request, response);
        }
	}
}
