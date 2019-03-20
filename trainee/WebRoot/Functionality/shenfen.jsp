<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>实习生管理系统</title>
<link href="../css/shenfen.css" rel="stylesheet" type="text/css" />
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet" >
<script src="../js/jquery.min.js" type="text/javascript"></script>
<script src="../js/hoverguide.js" type="text/javascript" language="javascript"></script>
<style>
	body{background-image: url(../img/shenfen.png);}
</style>
</head>
<body>
<div style="width:100%; height:670px; overflow:auto; border:1px solid #000000;">
<div id="mydiv" style="height:620px;">
  <div class="container" >
	 <div id="row">      
        <div class="logo">实习生管理系统</div>   
        <!--用户角色开始-->
        <div class="col-sm-6" style="margin:-3px auto auto 28%;">
		     <div >     
		      <ul id="nav" class="fl">
				<li><a href="teacherlogin.jsp" class="nav_on" id="mynav0" onmouseover="javascript:qiehuan(0)" title=""><span id="ld1"><p class="mtperson">教师</p></span></a></li> 
		        <li><a href="companylogin.jsp" onmouseover="javascript:qiehuan(1)" id="mynav1" class="nav_off" title=""><span id="ld2"><p class="mtperson">企业</p></span></a></li>       
		        <li><a href="familylogin.jsp" onmouseover="javascript:qiehuan(2)" id="mynav2" class="nav_off" title=""><span id="ld3"><p class="mtperson">家长</p></span></a></li> 
		        <li><a href="studentlogin.jsp" onmouseover="javascript:qiehuan(3)" id="mynav3" class="nav_off" title=""><span id="ld4"><p class="mtperson">学生</p></span></a></li>            
		      </ul>
		      
		      <div id=menu_con>
		        <div id=qh_con0 style="DISPLAY: none">
		         &nbsp;
		        </div>
		        <div id=qh_con1 style="DISPLAY: none">
		          &nbsp;
		        </div>
		        <div id=qh_con2 style="DISPLAY: none">
		          &nbsp;
		        </div>
		        <div id=qh_con3 style="DISPLAY: none">
		          &nbsp;
		        </div>
		        <div id=qh_con4 style="DISPLAY: none">
		          &nbsp;
		        </div>
		        <div id=qh_con5 style="DISPLAY: none">
		          &nbsp;
		        </div> 
		      </div>
		    </div>
		     <!--鼠标经过显示对应二级菜单结束--> 
		 </div> 
     <!--用户角色结束-->
     <!--版权开始-->
      
     <div class="soft_idx_foot fl">
          <p class="power" ">服务电话：18849334210&nbsp;&nbsp;&nbsp;&nbsp;服务邮箱：zhanguo2017@sina.com &nbsp;&nbsp;&nbsp;   在线客服qq：2469665600</p>
     </div>
     <!--版权结束-->  
     <!-- <img src="" style="width:100%; height:100%;"> -->
     </div>   	
    </div>
  </div>
 </div>
  	<script type="text/javascript">
		window.onload = function() {
		    //配置
		    var config = {
		        vx: 4,	//小球x轴速度,正为右，负为左
		        vy: 4,	//小球y轴速度
		        height: 2,	//小球高宽，其实为正方形，所以不宜太大
		        width: 2,
		        count: 200,		//点个数
		        color: "121, 162, 185", 	//点颜色
		        stroke: "130,255,255", 		//线条颜色
		        dist: 6000, 	//点吸附距离
		        e_dist: 20000, 	//鼠标吸附加速距离
		        max_conn: 10 	//点到点最大连接数
		    }

		    //调用
		    CanvasParticle(config);
		}
	</script>
	<script type="text/javascript" src="../js/canvas-particle.js"></script>
</body>
</html>