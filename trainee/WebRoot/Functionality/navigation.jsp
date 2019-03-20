<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>实习生管理系统</title>
<script type="text/javascript" src="../js/jquery.min.js" ></script>
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet">	

<link rel="stylesheet" href="../css/shouye.css" type="text/css">
<link rel="stylesheet" href="../css/shouye2.css" type="text/css">
<style>
.header{
width:100%; height:auto; text-align:center; float:left; margin-bottom:0px; background:url(../img/bg_top.jpg) top left repeat-x;
}
.header_wrap{
width:1023px; height:auto; margin: -30px auto; 
}
.logo{
	 padding: 0px 0 0px 0; float:left; width:291px; height:100px; background: url(../img/logo.jpg) top left no-repeat; display:block;margin:30px 0px 0px -114px;
} 
.time {
	float:right; font-size:13px; padding:5px 0px 0px 0; color:#111; margin:91px -58px -29px 0px;
	}
.quit{
    float:right;font-size:15px;padding:5px 0px 0px 0; color:#111; margin:47px -124px -29px 0px;
}
/* .anniu{
	width:40px; height:32px; border:0px; line-height:28px; color:#FFF; cursor:pointer; float:right; font-size:0px; font-family:'微软雅黑';background:url(../img/ss.png) center center no-repeat;margin:-33px -1px 0px 0px;
}
.anniu:hover{
	background:url(../img/ss.png) center center no-repeat #1B74CE;
}
.sear_bg{
	width:auto; height:32px; margin:82px 114px 0 484px; float:left; display:inline; line-height:32px; border:#8dc468 solid 1px; background:#7fd0eb; width:248px; overflow:hidden;-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;   
}
.kuang{
	 width:208px; margin: 0 0 0 0px; line-height:32px; height:32px; font-size:14px; color:#999; float:left; font-family:'微软雅黑'; border:0px; text-indent:20px;
} */
.navbar {
  position: unset;min-height: 50px;margin-bottom: 20px;border: 1px solid transparent;
}
.imghead{
border-radius: 50%;height: 80px;margin:12px 0px 13px 72px;
 }
 max-width{max-width:120px;_width:expression(this.width > 120 ? "120px" : this.width);}
</style>
</head>
<body>
<div class="header">
    <div class="header_wrap">
    	<div class="logo">
	    	<h3>
	    	<img src="../img/logo.png" style="margin: 9px 0px 0px 287px;">
	    	</h3>
    	</div> 	
    	<div class="quit">
    		<a href="logout">
              <img src="../img/exit.png" style="height:28px;">&nbsp;退出系统
            </a>
    	</div>
		<div class="time">
		   <script language="javascript" src="../js/time.js"></script>
		</div>	
	</div>
 </div>
 <div>
<nav class="navbar navbar-inverse "  role="navigation">
<!-- <nav class="navbar navbar-inverse navbar-fixed-top"  role="navigation">
 --><!-- 此句中的部分影响导航栏的固定与否 -->
	<div class="container-fluid"> 
		<div class="navbar-header">
	<!-- 		<a class="navbar-brand"  >实习生管理系统&nbsp;&nbsp;</a>
	 -->		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
				<span class="sr-only">切换导航</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
	
		<div class="collapse navbar-collapse " id="example-navbar-collapse"style="margin-left: 120px;">
			<ul class="nav navbar-nav line" id="line" ><!-- style="margin:0 0 0 120;" -->
				<li>
					<a href="decide"  lang="0">首页</a>
				</li>
			<li class="dropdown">
	 				<a href="listStudentMessage" lang="1">实习记录</a>
				</li>
					<li class="dropdown">
	 				<a href="showFile" lang="2">在线课程</a>
				</li>
				<li>
					<a href="listBusinessNotice" lang="3">企业公告</a>
				</li>	
				<li>
					<a href="listTeacherNotice" lang="4">学校公告</a>
				</li>
				<li>
					<a href="record.jsp" lang="6">交流平台</a>
				</li>
				<li>
					<a href="jianjie.jsp" lang="7">招聘信息</a>
				</li>
				<li class="dropdown">
					<a href="getUserInfo" lang="5">个人资料</a>
				</li>
				<div id="marker"></div>
			</ul>
			
			<ul class="nav navbar-nav navbar-right"> 
		        <li class="drop-menu-effect">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						 <span class="glyphicon glyphicon-user" ></span>
					</a>		
					<div class="submenu submenu1">
					    <div class="mj_menu_news_bg">
					        <div class="mj_menu_news_li">
					        	<div>
					        		<img class="imghead" src="${pageContext.request.contextPath }/images/${identity.user.image }">	
					           	</div>
					           <ul style="text-align:center;background-color:white;">
					           		<li>姓名：${identity.user.name }</li>
						          	<li>用户名：${identity.user.username }</li>
					           <!-- 学生 -->
					           <c:if test="${identity.userType=='student' }">
						          	<li>学号：${identity.user.username }</li>
						          	<li>手机号：${identity.user.phone }</li>
						       </c:if>
					           <!-- 老师 -->
					           <c:if test="${identity.userType=='teacher' }">
						          	<li>工号：${identity.user.username }</li>
						       </c:if>
					           <!-- 企业 -->
					           <c:if test="${identity.userType=='business' }">
						          	<li>邮箱：${identity.user.username }</li>
						       </c:if>
					           <!-- 家长 -->
					           <c:if test="${identity.userType=='parent' }">
						          	<li>手机号：${identity.user.username }</li>
						       </c:if>
					          	</ul> 
					        </div>
					    </div>
					</div>
				</li>
	    	</ul> 
		</div>
		<script>
$(function(){
	lanrenzhijia(".drop-menu-effect");
});
function lanrenzhijia(_this){
	$(_this).each(function(){
		var $this = $(this);
		var theMenu = $this.find(".submenu");
		var tarHeight = theMenu.height();
		theMenu.css({height:0});
		$this.hover(
			function(){
				$(this).addClass("mj_hover_menu");
				theMenu.stop().show().animate({height:tarHeight},200);
				
			},
			function(){
				$(this).removeClass("mj_hover_menu");
				theMenu.stop().animate({height:0},200,function(){
					$(this).css({display:"none"});
				});
			}
		);
	});
}
</script>
</div>

</nav>
</div>
</body>