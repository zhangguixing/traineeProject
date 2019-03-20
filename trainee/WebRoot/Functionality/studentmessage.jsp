<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>实习生管理系统</title>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/jquery.form.js"></script>
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet">
<link href="../css/table.css" rel="stylesheet">

	<!-- 修改的内容 -->
	     <!-- 编辑器 -->
	    <link rel="stylesheet" href="../qingeditor/qingstyle.css" />
		<script charset="utf-8" src="../qingeditor/qingeditor-min.js"></script>
		<script>var textarea_name='content';</script>
		<script charset="utf-8" src="../qingeditor/qingeditor-set.js"></script>
		
	    <style>
		  ul{margin-top:0px;list-style:none;}
		  .fg {float:left;}
		  .fg p {float:left;}
		  .fg label {font-weight:normal;}
		  #cot hr {height:1px;color:#333;}
	 	</style>
    <!-- 修改内容结束 -->
 <script>
//密码
 function funpsd(){
  var psd=document.form1.psd.value;
  if(psd==""){
   document.getElementById("sp1").innerHTML="<font color='red'>密码不能为空";
   }
  else if(psd.length<6 || psd.length>15){
   document.getElementById("sp1").innerHTML="<font color='red'>密码不能小于6位或不能大于15位";
   }
  else {
   document.getElementById("sp1").innerHTML="";
   }
  }
//手机号
 function funtel(){
   var tel=document.form1.tel.value;
   if(tel==""){
	   document.getElementById("sp3").innerHTML="<font color='red'>手机号不能为空";
	   }
   else if(tel.length!=11||!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel))  ){
	   document.getElementById("sp3").innerHTML="<font color='red'>不是正确的手机号前七位或完整的11位手机号";
	  }
   else {
 	  document.getElementById("sp3").innerHTML="";
 	  }
  }
//邮箱
 function funemail(){ 
  var email=document.getElementById("email").value;
  if(!( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){ 
      document.getElementById("sp5").innerHTML="<font color='red'>您的电子邮件格式不正确"; 
   return false; 
  } 
 } 
 </script>
<!-- 渐变色 -->
<style>
.linear{
width:100%;
height:100%;
FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#DFEFF2,endColorStr=#fafafa); /*IE*/
background:-moz-linear-gradient(top,#DFEFF2,#fafafa);/*火狐*/
background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#DFEFF2), to(#fafafa));/*谷歌*/
background-image: -webkit-gradient(linear,left bottom,left top,color-start(0, #DFEFF2),color-stop(1, #fafafa));/* Safari & Chrome*/
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#DFEFF2', endColorstr='#fafafa'); /*IE6 & IE7*/
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#DFEFF2', endColorstr='#fafafa')"; /* IE8 */
}
</style>
<style type="text/css">
#imghead {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);border-radius: 50%;width: 150px;height: 150px;margin:-29px 0px -5px 148px}
</style>
<script type="text/javascript">
      //图片上传预览    IE是用了滤镜。
        function previewImage(file)
        {
          var MAXWIDTH  = 260; 
          var MAXHEIGHT = 180;
          var div = document.getElementById('preview');
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead>';
              var img = document.getElementById('imghead');
              img.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width  =  rect.width;
                img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'10px';
                img.style.marginTop = rect.top+'-0px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead>';
            var img = document.getElementById('imghead');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function clacImgZoomParam( maxWidth, maxHeight, width, height ){
            var param = {top:0, left:0, width:width, height:height};
            if( width>maxWidth || height>maxHeight )
            {
                rateWidth = width / maxWidth;
                rateHeight = height / maxHeight;
                
                if( rateWidth > rateHeight )
                {
                    param.width =  maxWidth;
                    param.height = Math.round(height / rateWidth);
                }else
                {
                    param.width = Math.round(width / rateHeight);
                    param.height = maxHeight;
                }
            }
            
            param.left = Math.round((maxWidth - param.width) / 2);
            param.top = Math.round((maxHeight - param.height) / 2);
            return param;
        }
</script>
<script type="text/javascript">
//上传头像
	function uploadImage(){
		if(${studentInfo.image!='face.png' }){
			$("#imageForm").submit();
		}
	}
	//修改信息
	function submitForm(){
		var form = new FormData(document.getElementById("infoId"));
		 $.ajax({
             url:"updateInfo",
             type:"post",
             data:form,
             processData:false,
             contentType:false,
             success:function(data){
            	 if(data){
            		 alert("修改成功!");
            	 }else{
            		 alert("修改失败!");
            	 }
             },
             error:function(e){
                 alert("错误！！");
             }
         });        
	}
</script> 
</head>
<body >
<div class="linear" >
<!-- 导航栏开始 -->
<jsp:include page="navigation.jsp"></jsp:include>
<!-- 导航栏结束 -->	
<!-- 主界面   -->
	<div class="container">
			<div class="row clearfix" style="height: 580px;">
		        <div class="col-md-5 column" style="-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border:#EDEFF0 solid;border-width:3px; background-color: #FFFFFF;margin:25px 60px 30px 285px;">
			        <div style="float:inherit">
			 		   <form name="form1" method="post" id="infoId">
			 		   <input type="hidden" name="student.id" value="${studentInfo.id }" />
			 		   <input type="hidden" name="student.username" value="${studentInfo.username }" />
			 		   <input type="hidden" name="student.image" value="${studentInfo.image }" />
			 			<table class="table table-hover" style="font-size: 14px;">
						      <h4 style="margin:18px 0px 16px 0px;">
							  <span>基本信息</span>
						   	  </h4>
							<tbody>
									<tr>
							     		<td style="vertical-align: middle;">
										<span class="p13-999" >姓名</span>				
										</td>
								     <td>
								    	<div id="tijiaoxingming">
									    	<div class="col-sm-9">
									      		<input type="text" name="student.name" value="${studentInfo.name }"  class="form-control input-sm" placeholder="请输入姓名">
									    	</div>
								    	</div>
									    	
									  </td>
									</tr>
									<tr>
									    <td>
										<span class="p13-999" >学号</span>					
										</td>
										<td><span style="margin: 0 0px 0px 20px;">${studentInfo.username }</span></td>
									</tr>
								 <tr>
									<td style="vertical-align: middle;">
							    	<span class="p13-999">手机</span>
							    	</td>
							    	<td>
							    	<!-- 如果手机号为空 -->							   
								    	<div class="col-sm-9">
								      		<input type="text" name="student.phone" value="${studentInfo.phone }" id="tel" onblur="funtel();"  class="form-control input-sm" placeholder="请输入手机号" /><span id="sp3"></span>
								    	</div>
								   </td>
								</tr>
						         <tr>
						           <td>
									<span class="p13-999"">密码</span>					
								   </td>
								   <td>
								   <div class="col-sm-9">
		   							<input type="password" name="student.password" value="${studentInfo.password }" id="psd1" onblur="funpsd();" class="form-control input-sm" placeholder="请输入密码"/><span id="sp1"></span>
						           </div>
						           </td>
						         </tr>
							</tbody>
						</table>
						 <div class="col-sm-8" style="margin:0px 0px 20px 22%;">
				    	   <div style="float:left"> 
				    		<button class="btn btn-default btn-info btn-sm" onclick="submitForm()" type="button">提交</button>
				    	   </div>
				    	   <div style="margin-left:110px;">
				    		<button  class="btn btn-default btn-sm" type="reset">重置</button>
		   		    	   </div>							
				    	</div> 
						</form>
					</div> 
					<div class="modal fade" id="modal-container-123457" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					    <div class="modal-dialog">
						  <div class="modal-content">
						    <div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>	
					       <div style="margin:0px 0px 0px 13px;">
								<form id="imageForm" method="post" enctype="multipart/form-data" action="imageUpload" style="overflow: hidden;">
							    	<input type="hidden" name="id" value="${studentInfo.id }" />
							    	<div class="modal-body" style="font-size: 13px;">	
							    	    <div>			  
										<input type="file" name="upload" style="width: 200px; height: 25px;margin: 29px 0px -28px 0;" onchange="previewImage(this)" id="upload" />
										</div>
										<div id="preview" >	
                                        <img id="imghead" src="../img/face.png" style="border-radius: 50%;width: 150px;height: 150px;margin:-29px 0px -5px 148px;"/>
										</div>
									</div>
									<div class="modal-footer">							 
 									     <button type="button" onclick="uploadImage();" class="btn btn-primary btn-sm">确定</button>
										 <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button> 
									</div>
							  </form>
							</div> 
				          </div>	
			             </div>   								
				    </div>
				<div  class="col-md-4 column" > 
					   <img src="${pageContext.request.contextPath }/images/${studentInfo.image }" style="border-radius: 50%;width: 150px;height: 150px;margin:37px 0px 20px 7px;"/>
					<a href="javascript:void(0);"  style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123457">
					<span style="margin:0px 0px 0px 60%">修改</span>
					</a>
				</div>			
		      </div>
	      </div>
   </div> 
 </div>
</body>
</html>