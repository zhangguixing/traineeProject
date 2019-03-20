<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>实习生管理系统</title>
<script src="../js/jquery.min.js"></script>
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet">
<!-- 渐变色 -->
<style>
.linear {
	width: 100%;
	height: 100%;
	FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,
		startColorStr=#DFEFF2, endColorStr=#fafafa); /*IE*/
	background: -moz-linear-gradient(top, #DFEFF2, #fafafa); /*火狐*/
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#DFEFF2),
		to(#fafafa)); /*谷歌*/
	background-image: -webkit-gradient(linear, left bottom, left top, color-start(0, #DFEFF2),
		color-stop(1, #fafafa)); /* Safari & Chrome*/
	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,
		startColorstr='#DFEFF2', endColorstr='#fafafa'); /*IE6 & IE7*/
	-ms-filter:
		"progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#DFEFF2', endColorstr='#fafafa')";
	/* IE8 */
}
</style>
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
  <script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/ueditor.config.js"></script>
  <script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/ueditor.all.min.js"> </script>
  <script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/lang/zh-cn/zh-cn.js"></script>

    <script>
   		window.UEDITOR_HOME_URL = "${pageContext.request.contextPath }/js/ueditor/";
    	var ue = UE.getEditor('editor');
    </script>
<script type="text/javascript">
function paging(){
	 var page = document.getElementById("page").value;
	 if(page>${pageResults[0].totalPageCount}||page<=0||page==null){
		alert("请输入合理页数");
		$("#page").val("");
	}else{
		document.getElementById("pageTo").href="${method}?pageNo="+page;
	} 
}
</script>

</head>

<body>
	<div class="linear">
		<!-- 导航栏开始 -->
		<jsp:include page="navigation.jsp"></jsp:include>
		<!-- 导航栏结束 -->
		<!-- 主界面   -->
		<div class="container" style="margin-top:60px;">
			<div class="row clearfix">
				<div class="col-md-3 column" style="position:absolute;">	
	    		<jsp:include page="date.jsp"></jsp:include>
	         </div>
		  <!-- 全部日志 -->
			  <div class="col-md-9 column" style="-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border:#EDEFF0 solid;border-width:5px; background-color: #FFFFFF;margin:-31px 0px 0px 352px;">
				<h4 style="margin-top:10px;">
						${requestScope.type } <span style="float:right;"> <c:if test="${requestScope.isShow == true}">
								<button type="button" class="btn btn-info btn-xs" onclick="location.href='javascript:void(0);" style=" text-decoration: none;" data-toggle="modal" data-target="#modal-container-123457">&nbsp;新建&nbsp;</button>
							</c:if>
							<button type="button" class="btn btn-info btn-xs" onclick="location.href='decide'">&nbsp;返回&nbsp;</button>
						</span>
					</h4>
					<hr style="margin-top: 10px; height:1px;border:none;border-top:2px dotted ;">
					<div class="col-md-12 column" style="overflow-x:hidden;height:435px; ">
						<table class="table table-hover" style="font-size: 14px;">
							<thead>
								<tr>
									<th>日志名称</th>
									<th></th>
									<th></th>
									<th>保存时间</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach var="message" items="${pageResults[0].items }">
									<tr>
										<td>
											<p>
												<a href="findDiscussion?id=${message.id }&target=${requestScope.type }">${message.title }</a>
											</p>
										</td>
										<td></td>
										<td></td>
										<td class="p13-999">${message.date }</td>
										<td><a href="findDiscussion?id=${message.id }&target=${requestScope.type }"><img src="../img/chakan.png" data-toggle="tooltip" data-placement="bottom"></a> &nbsp;&nbsp; <c:if test="${requestScope.isShow }">
												<a href="javascript:void(0)" onclick="del('${message.id }')"> <img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除"></a>
											</c:if></td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
						  		    <!-- 编辑日志弹框开始 -->
			<div class="modal fade" id="modal-container-123457" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		      <div class="modal-dialog">
			    <div class="modal-content">
				  <form action="publish" id="con" class="con" name="form1" method="post" style="width:100%;">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h4 class="modal-title" id="myModalLabel" style="font-size: 16px;">
						<span id="g_title"><b>标题</b>：
 							<input  name="title" style="height:24px;width: 50%;"placeholder="请输入标题(最长为15个字)" maxlength="15"></input> 				     
 						</span>
					</h4>
				</div>						  
				<div class="modal-body" style="font-size: 13px;height:auto;">
					<div style="color:#666666;">
																			  			  
						     <textarea id="editor" class="cot" name="messageInfo" style="width:100%;height:380px;" placeholder="请输入内容......."></textarea>
						    
							<!-- <div class="fg" >				  	
							  	<p>
								  	<label>分类：</label>
								  	<select style="width:150px;height:28px;padding:0;margin-right:10px;">
								    	<option>实习情况</option>
								    	<option>实习心得</option>
								    	<option>实习分享</option>
								  	</select>
								  	<a href="#" data-toggle="modal" data-target="#modal-container-1847" style="text-decoration:none;margin-right:10px;">添加分类</a>
								</p>						
							</div> -->
				        <div class="modal-footer">
		     			  <div class="col-sm-8" style="float:right;" >
					      	<button type="submit" class="btn btn-default btn-info">保存并发表</button>&nbsp;&nbsp;
							<button type="button" class="btn btn-default"  data-dismiss="modal">取消</button> 
							
					      </div>   
					    </div>	     				        						 
						 </div>		     
						</div>
					 </form>
				     </div>	
			       </div>   								
				 </div>
						<p>
							<c:if test="${pageResults[0].totalPageCount ne 0}">
								共${pageResults[0].totalPageCount}页，当前是第${pageResults[0].pageNo}页<input id="page" value="" type="text" size="1px" /><a id="pageTo" onclick="paging();">跳转</a>
								<c:if test="${pageResults[0].pageNo!=1 }">
									<a href="${method }?pageNo=${pageResults[0].pageNo -1}">上一页</a>
								</c:if>
								<c:if test="${pageResults[0].pageNo!= pageResults[0].totalPageCount }">
									<a href="${method }?pageNo=${pageResults[0].pageNo +1}">下一页</a>
								</c:if>
							</c:if>
							<c:if test="${pageResults[0].totalPageCount eq 0}">
								<center>
									<font color="#6E6E6E">暂无实习记录！</font>
								</center>
							</c:if>
						</p>
						
						<div class="mh">
							<script>
						function del(id) {
						var r=confirm ("您真的确定要删除吗？\n\n请确认！");
						if (r==true){
							$.ajax({
								url:"deleteMessage",
								type:"post",
								data:{"id":id},
								success:function(data){
									if(data){
										alert('您已删除成功！');
										window.location.reload();
									}else{
										alert('删除失败!');
									}
								}
							});
							}else{
								alert('删除失败!');
							}
						};
						</script>
						</div>
					</div>
					<!-- 编辑弹窗结束 -->
					<!-- 详细内容弹框开始 -->
					<div class="modal fade" id="modal-container-123456" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
									<h4 class="modal-title" id="myModalLabel" style="font-size: 16px;">动态</h4>
								</div>
								<div class="modal-body" style="font-size: 13px;height:468px;">
									<div style="color:#666666;">
										<div>
											<div class="col-md-5 column">
												<p class="p13-999">标题：</p>
												<p class="p13-999">2016-10-17 21:06</p>
											</div>
										</div>
									</div>
									<div class="col-md-12 column" style="border-top:1px solid #ccc">
										<br />
										<div style="height:380px;">
											<span>内容：</span><br> <br>
											<div class="col-md-12 column">
												<p id="x_content"></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
			<!-- 全部资源结束 -->
		</div>
	</div>

</body>
</html>
