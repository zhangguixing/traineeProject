<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>实习生管理系统</title>
<script src="../js/jquery.min.js"></script>
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/page.js"></script>
<link href="../css/page2.css" type="text/css" rel="stylesheet"/>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet">
<link href="../css/video.css" rel="stylesheet" type="text/css" />
<link href="//vjs.zencdn.net/5.19/video-js.min.css" rel="stylesheet">
<script src="//vjs.zencdn.net/5.19/video.min.js"></script>

<style>
.video-js{
height: 212px;width:326px;}
.video-js .vjs-big-play-button{
width:2em;}
</style>
 <style> 
.thumbnail
{
margin:21px;
width:337px;
height:auto;
/* text-align:center; */
/* line-height:100px; */
float:left;
}
.thumbnail:hover{
transform:scale(1.05);
-ms-transform:scale(1.05); 
-moz-transform:scale(1.05); 
-webkit-transform:scale(1.05); 
-o-transform:scale(1.1);
-moz-box-shadow: 5px 5px 4px #888888; 
box-shadow: 5px 5px 4px #888888;
}
</style>  
<style type="text/css">
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

<!-- 修改的内容 -->
<!-- 编辑器 -->
<link rel="stylesheet" href="../qingeditor/qingstyle.css" />
<script charset="utf-8" src="../qingeditor/qingeditor-min.js"></script>
<script>var textarea_name='content';</script>
<script charset="utf-8" src="../qingeditor/qingeditor-set.js"></script>

<style>
ul {
	margin-top: 0px;
	list-style: none;
}

.fg {
	float: left;
}

.fg p {
	float: left;
}

.fg label {
	font-weight: normal;
}

#cot hr {
	height: 1px;
	color: #333;
}
</style>
<!-- 修改内容结束 -->
<script>
function videoChange(target, id) {
	
	var fileSize = 0;
	var filetypes = [ ".mp4", ".webm", ".ogv" ];
	
	var filepath = target.value;
	if (filepath) {
		var isnext = false;
		var fileend = filepath.substring(filepath.indexOf("."));
		if (filetypes && filetypes.length > 0) {
			for ( var i = 0; i < filetypes.length; i++) {
				if (filetypes[i] == fileend) {
					isnext = true;
					break;
				}
			}
		}
		if (!isnext) {
			alert("文件格式不符合上传要求！\n本平台只支持上传mp4，webm,ogv为后缀的视频文件！");
			target.value = "";
			return false;
		}
	} else {
		return false;
	}

	if (isIE && !target.files) {
		var filePath = target.value;
		var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
		if (!fileSystem.FileExists(filePath)) {
			alert("文件不存在，请重新输入！");
			return false;
		}
		var file = fileSystem.GetFile(filePath);
		fileSize = file.Size;
	} else {
		fileSize = target.files[0].size;
	}
	
}
function Checkevideo() {	
	var files = $("#uploadFile").val();
	if (files == "") {
		alert("您还没选择要上传的文件");
		return false;
	} else {
		document.getElementById("uploadForm").action="fileUpload";
	}
		
}

function chuanid(obj){
	url1=url+'/chuanID';
	var e_id=obj;
	
	$.ajax({
		type:'post',
		url:url1,
		datatype:'html',
		data:{
			"e_id":e_id,		
		},
		cache:false,
		success:function(data) {			
			$("#modal-container-7").modal("show");
		},
			
	});
}

function fun()
{
var rtxid=document.getElementById('rtid').innerHTML;

document.getElementById('rttid').value=rtxid;
}
function paging(){
	var page = document.getElementById("page").value;
	if(page>${pageResults[0].totalPageCount}page<=0||page==null){
		alert("请输入合理页数");
		$("#page").val("");
	}else{
		document.getElementById("pageTo").href="showFile?pageNo="+page;
	}
}
</script>

</head>

<body>
	<div class="linear">
		<!-- 导航栏开始 -->
		<jsp:include page="navigation.jsp"></jsp:include>
		<!-- 导航栏结束 -->
		<c:if test="${identity.userType=='teacher' }">
			<button type="button" style="border-radius: 50%;margin:0px 0px 0px 1282px; padding:0px 0px;" class="btn btn-info btn-xs" onclick="location.href='javascript:void(0);style=" text-decoration: none;" data-toggle="modal" data-target="#modal-container-123457">
				<img src="../img/sc.png" style="width:50px;height:50px;"></a>
			</button>
		</c:if>

		<!--  style="width:60px;height:60px;margin: 0px 95px 0px 0px;float:right;" -->
		<div class="modal fade" id="modal-container-123457" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" style="margin-top: -8px;" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div style="margin:0px 0px 0px 13px;">
						<form action="" name="" id="uploadForm" method="post" enctype="multipart/form-data" action="javascript: uploadAndSubmit();" style="overflow: hidden;">
							<div class="modal-body" style="font-size: 13px;">
								<s:file name="upload" label="File" id="uploadFile" onchange="videoChange(this);" value="选择视频"></s:file>
							</div>

							<p style="margin:10px 58px 18px 13px;">
								课程名称：<input name="name" maxlength="10" placeholder="字数少于10字"> <br> 文件说明： <br>
								<textarea name="message" maxlength="80" cols="58" rows="3" placeholder="请输入80字以内介绍"></textarea>
							</p>
							<div class="modal-footer">
								<button type="submit" onclick="return Checkevideo();" class="btn btn-primary btn-sm">保存</button>
								<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="container" style="margin-top:90px;">
			<div class="row" style="margin:-87px 0px 0px 0px;">
				<c:forEach items="${pageResult.items }" var="course">
					<div class="thumbnail">
					   	 <div>
							  <video id="my-player" class="video-js" controls preload="auto" data-setup='{}'> <source src="${pageContext.request.contextPath }/upload/${course.fileName }" type="video/mp4"></source> <source src="${pageContext.request.contextPath }/upload/${course.fileName }" type="video/webm"></source> <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
							  <p class="vjs-no-js">
									To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video </a>
							  </p>
							  </video>
						 </div>	
						 <div>
							   <p style="height:20px;width: 327px; overflow:hidden;font-size:15px;text-align:center;">
							   ${course.name }</p>			
							   <div style="width:327px;height:37px; overflow:hidden;text-overflow:ellipsis;font-size:12px;color:#0009">
							   ${course.message }</div>  
							   <a href="download?fileName=${course.fileName }" style="margin-right">
							   <img  title="下载"src="../img/xiazai4.png" style="float:left;margin-left:113px;"  >
							   </a>
							   <c:if test="${sessionScope.identity.userType eq 'teacher' }">
									<a href="deleteFile?id=${course.id }" style="margin-right">
							       	<img  title="删除"src="../img/detele.png" style="float:right;margin-right:127px">   
							       	</a>  
								</c:if>
					    </div> 
					</div>
				</c:forEach>
			</div>
			<div style="text-align:center">
				<p>
				<c:if test="${pageResult.totalPageCount ne 0}"></c:if>
					共${pageResult.totalPageCount}页，当前是第${pageResult.pageNo}页<input id="page" value="" type="text" size="1px"><a id="pageTo" onclick="paging();">跳转</a>
					<c:if test="${pageResult.pageNo!=1 }">
						<a href="showFile?pageNo=${pageResult.pageNo -1}">上一页</a>
					</c:if>
					<c:if test="${pageResult.pageNo!=pageResult.totalPageCount }">
						<a href="showFile?pageNo=${pageResult.pageNo +1}">下一页</a>
					</c:if>
					<c:if test="${pageResult.totalPageCount eq 0}">
						<center>
							<font color="#6E6E6E">暂无在线课程！</font>
						</center>
					</c:if>
				</p>
			</div>
		</div>
</body>
</html>
