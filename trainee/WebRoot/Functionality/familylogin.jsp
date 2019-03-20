<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>实习生管理系统</title>
<link rel="stylesheet" href="../css/denglu.css" type="text/css">
<script src="../js/jquery.min.js"></script>
<link href="../css/style.min.css"  rel="stylesheet">
<link href="../css/bootstraplogin.min.css" rel="stylesheet">
<script>
    if(window.top!==window.self){window.top.location=window.location};
    $(function(){
	    $("#loginId").click(function(){
	    	var username = $("#usernameId").val();
	    	var password = $("#passwordId").val();
	    	var tip = $("#tipId");
	    	if(username == ""){
	    		tip.html("<img src='../easyui/images/validatebox_warning.png'>用户名不能为空！");
	    	}else if(password == ""){
	    		tip.html("<img src='../easyui/images/validatebox_warning.png'>密码不能为空！");
	    	}else{
	    		$.ajax({
	    			url:"familyLogin",
	    			type:"post",
	    			data:{"username":username,"password":password},
	    			success:function(data){
	    				if(data == 'true'){
	    					window.location.href="decide";
	    				}else{
	    					tip.html("<img src='../easyui/images/validatebox_warning.png'>用户名或密码错误！");
	    				}
	    			},
	    			error:function(){
	    				alert('error');
	    			}
	    		});
	    	}
	    });
    });
</script>
<style>
body{
background: url("../img/pin_04.png") no-repeat right fixed ;
}
</style>	
</head>
<body class="signin">
<div class="logopanel m-b">
<captial style="font-size:32px;">实习生管理系统 </captial>
</div>
<div class="signinpanel">
        <div class="row">
            <div class="col-sm-7">
              
            </div>
            <div class="col-sm-5">
                <form method="post">
                    <font class="no-margins" style="font-size:22px;">家长登录：</font>
                    <br />
                    <div id="tipId" class="tishi"></div>
                     <input type="text" name="username" id="usernameId" class="form-control tel" placeholder="手机号"/>
					 <input type="password" name="password" id="passwordId" class="form-control pword" placeholder="密码">	
                    </br>
                    <a href="#">忘记密码？</a>
                    <br/>
                    <button type="button"  id="loginId" class="btn btn-success btn-block">登录</button>
                    <a href="../zhuce/familyzc.jsp"><button type="button" class="btn btn-success btn-block">注册</button></a>
                </form>
            </div>
        </div>
         
 </div>
    <div class="signup-footer" align="left">
           <div class="pull-left">
               
           </div>
        </div>
</body>

</html>
 

