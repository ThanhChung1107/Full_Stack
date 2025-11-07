<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page language="java" import="javax.servlet.RequestDispatcher"%>
<%@ page language="java" import="javax.servlet.ServletException"%>
<%@ page language="java" import="java.sql.Connection"%>
<%@ page language="java" import="java.sql.*"%>
<%@ page language="java" import="java.sql.DriverManager"%>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    String address = "192 nguyen luong bang";
    boolean isValid = false;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver"); // dùng driver mới
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/clinicdb?useUnicode=true&characterEncoding=UTF-8",
            "root", "root"
        );

        String sql = "SELECT * FROM users WHERE email=? AND password=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, username);
        ps.setString(2, password);
        ResultSet rs = ps.executeQuery();

        if (rs.next()) { // chỉ cần kiểm tra có tồn tại hay không
            isValid = true;
        }

        rs.close();
        ps.close();
        conn.close();
    } catch (Exception e) {
        e.printStackTrace();
    }

    if (isValid) {
        request.setAttribute("address", address);
        request.getRequestDispatcher("welcome.jsp").forward(request, response);
    } else {
        response.sendRedirect("login.jsp");
    }
%>