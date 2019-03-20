<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>

<html lang="en" class="no-js">
    <head>
      <meta charset="utf-8">

        <title>实习生管理系统学生注册</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="description" content="">

        <meta name="author" content="">
        <!-- CSS -->

        <link rel="stylesheet" href="assets/css/reset.css">

        <link rel="stylesheet" href="assets/css/supersized.css">

        <link rel="stylesheet" href="assets/css/style.css">
       <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->

        <!--[if lt IE 9]>

            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>

        <![endif]-->
        
     </head>
   <body>
   	   <div class="logo">
   	   	  实习生管理系统
   	   </div>
   	   
       <div class="page-container">

   			<div class="zhuce">
   				学生注册页面
   			</div>
   			
			<form action="../Functionality/register"  method="post">

                <input type="text" name="student.name" class="username" placeholder="姓名">
                             
                <input  name="student.username" class="number" placeholder="学号" maxlength="9">
                
               	<input type="tel" name="student.phone" class="tel" placeholder="手机号">
               	
   				<input type="password" name="student.password" class="password" placeholder="密码">
   				
   				<input type="password" name="cpassword" class="cpassword" placeholder="确认密码">
                
                <input type="hidden" name="id" value="4"/>
                
                <button type="submit" class="submit">提交</button>
  
                <button type="button" onclick="javascript:window.history.back(-1)" class="exit">返回</button>
                
  				<div class="error"><span>+</span></div>
  				
  				<div class="infoId"><span>两次密码不一致</span></div>
 
            </form>

  
        </div>

        <!-- Javascript -->

        <script src="assets/js/jquery.min.js"></script>

        <script src="assets/js/supersized.3.2.7.min.js"></script>

        <script src="assets/js/supersized-init.js"></script>

        <script src="assets/js/studentzc.js"></script>
        
    </body>
</html>
