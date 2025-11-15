<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.List" %>
<%@ page import="com.FirstProject.model.bean.Wire" %>

<%
    List<Wire> users = (List<Wire>) request.getAttribute("users");
%>

<h2>Danh sách người dùng:</h2>

<ul>
<% for(Wire u : users) { %>
    <li>
    Username: <%= u.getUsername() %> 
    - Address: <%= u.getAddress() %> 
    - Alive: <%= u.isAlive() %>
</li>
<% } %>
</ul>
