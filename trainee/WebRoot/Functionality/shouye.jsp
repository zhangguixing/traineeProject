<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<script type="text/javascript" src="http://hovertree.com/texiao/js/1/js/koala.min.1.5.js"></script>
<!-- 渐变色 -->
<style>
.linear{
width:100%;
height:500px;
FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#DFEFF2,endColorStr=#fafafa); /*IE*/
background:-moz-linear-gradient(top,#DFEFF2,#fafafa);/*火狐*/
background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#DFEFF2), to(#fafafa));/*谷歌*/
background-image: -webkit-gradient(linear,left bottom,left top,color-start(0, #DFEFF2),color-stop(1, #fafafa));/* Safari & Chrome*/
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#DFEFF2', endColorstr='#fafafa'); /*IE6 & IE7*/
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#DFEFF2', endColorstr='#fafafa')"; /* IE8 */
}
</style>

</head>
<body class="linear">
<div>
<script>
     $('.linear').css('height',$(window).height());
</script>
<!-- 导航栏开始 -->
<jsp:include page="navigation.jsp"></jsp:include>
<!-- 导航栏结束 -->
	<div class="banner_bg">
		<div class="banner">
			<div id="fsD1" class="focus">  
			    <div id="D1pic1" class="fPic">  
			        <div class="fcon" style="display: none;">
			           <img src="../img/xxq.jpg" style="opacity: 1; ">
			            <span class="shadow">校园一角</span>
			        </div>
			        <div class="fcon" style="display: none;">
			            <img src="../img/dxq.jpg" style="opacity: 1; ">
			            <span class="shadow">校园风光</span>
			        </div>
			        <div class="fcon" style="display: none;">
			            <img src="../img/xx1.jpg" style="opacity: 1; ">
			            <span class="shadow">校园一瞥</span>
			        </div>  
			    </div> 
			    <div class="fbg">  
			    <div class="D1fBt" id="D1fBt">  
			        <a href="javascript:void(0)" hidefocus="true" target="_self" class="current"><i>1</i></a>  
			        <a href="javascript:void(0)" hidefocus="true" target="_self" class=""><i>2</i></a>  
			        <a href="javascript:void(0)" hidefocus="true" target="_self" class=""><i>3</i></a>  
			    </div>  
			    </div>    
			</div>  
<script type="text/javascript">
	Qfast.add('widgets', { path: "../js/terminator2.2.min.js", type: "js", requires: ['fx'] });  
	Qfast(false, 'widgets', function () {
		K.tabs({
			id: 'fsD1',   //焦点图包裹id  
			conId: "D1pic1",  //** 大图域包裹id  
			tabId:"D1fBt",  
			tabTn:"a",
			conCn: '.fcon', //** 大图域配置class       
			auto: 1,   //自动播放 1或0
			effect: 'fade',   //效果配置
			eType: 'click', //** 鼠标事件
			pageBt:true,//是否有按钮切换页码
			bns: ['.prev', '.next'],//** 前后按钮配置class                          
			interval: 6000  //** 停顿时间  
		}) 
	})  
</script>
		</div>
	 </div>
		<div class="wrap">
			<div class="news news_big">
				<div class="news_t">
					<h4 class="newsnow"><a href="listBusinessNotice" title="企业最新消息" class="tit1">企业公告</a></h4>
 					<p><a href="listBusinessNotice">更多</a></p>
 				</div>
				<div class="news_c">
					<img src="../img/31.jpg">
					<ul>
						<c:forEach items="${pageResults[0].items}" var="bNotice">
					   		 <li><a href="findDiscussion?id=${bNotice.id }&target=企业公告" title="">${bNotice.title }</a><span>${bNotice.date }</span></li>
					    </c:forEach>
					</ul> 
				</div>
			</div>
		    <div class="news news_r" >
				<div class="news_t">
					<h4 class="newsnow"><a href="listStudentMessage" title="学生动态" class="tit1">学生动态</a></h4>
					<p><a href="listStudentMessage">更多</a></p>
				</div>
				<div class="news_c news_c02">			
					<ul>
						<c:forEach items="${pageResults[1].items }" var="message">
						 	<li><a href="findDiscussion?id=${message.id }&target=实习记录" title="学生的动态">${message.title }</a><span>${message.date }</span></li>
						</c:forEach>
					</ul>
				</div>
			</div>
			<div class="news news_r" >
				<div class="news_t">
				   <h4 class="newsnow"><a href="listTeacherNotice" title="学校的最新消息" class="tit1">学校的最新消息</a></h4>
				   <p><a href="listTeacherNotice">更多</a></p>
				 </div>
				<div class="news_c news_c02">		
					<ul>
					  <c:forEach items="${pageResults[2].items }" var="tNotice">
					 	<li><a href="findDiscussion?id=${tNotice.id }&target=学校公告" title="学校的动态">${tNotice.title }</a><span>${tNotice.date }</span></li>
					  </c:forEach>
					</ul>
				</div>
			</div>
   </div>
<div class="footer">	
	<div class="footer_1">
		<div class="footer_wrap">
		<p>版权所有：河北北方学院信息科学与工程学院-B509JavaWeb组  &nbsp;  
   &nbsp;&nbsp; 地址：河北北方学院 &nbsp;&nbsp; 邮政编码：075000</p>
		<div class="footer_1_other">
			<ul>
	      <!--以下代码是联系的方式例如：QQ，微信微博，脸书等等  -->
				<li><a href="#" class="fo_1"></a></li>
				<li><a href="#" class="fo_2"></a></li>
				<li><a href="#" class="fo_3"></a></li>
			</ul>
		</div>
		</div>		
	</div>
</div> 
</div>
</body>
</html>