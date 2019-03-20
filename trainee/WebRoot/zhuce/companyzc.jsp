<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>

<html lang="en" class="no-js">
    <head>
      <meta charset="utf-8">

        <title>企业</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="description" content="">

        <meta name="author" content="">
        <!-- CSS -->

        <link rel="stylesheet" href="assets/css/reset.css">

        <link rel="stylesheet" href="assets/css/supersized.css">

        <link rel="stylesheet" href="assets/css/style.css">
     </head>
   <body>
   	   <div class="logo">
   	   	  实习生管理系统
   	   </div>
   	   
       <div class="page-container">

   			<div class="zhuce">
   				企业注册页面
   			</div>
   			
			<form action="../Functionality/register"  method="post">

                <input type="text" name="business.name" class="username" placeholder="公司名称">
                             
                <input  name="business.username" class="email" placeholder="邮箱">
             
                <div>
                 	<input type="text" name="news" class="news" placeholder="验证码" maxlength="6">
 					
 					<button type="button" class="but" id="getCodeId">获取验证码</button>
       
                </div>
               
   				<input type="password" name="business.password" class="password" placeholder="密码">
   				
   				<input type="password" name="cpassword" class="cpassword" placeholder="确认密码">
                
                <input type="hidden" name="id" value="2"/>
                
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

        <script src="assets/js/companyzc.js"></script>
    </body>
</html>
