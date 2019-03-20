<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>实习生管理系统</title>
<script src="../js/jquery.min.js"></script>
<script src="../js/jquery.min2.js"></script>
<script type="text/javascript" src="../js/page.js"></script>
<script src="../js/bootstrap_3.3.4.js" type="text/javascript"></script>
<link href="../css/bootstrap_3.3.4.css" rel="stylesheet">
<link href="../css/page.css" type="text/css" rel="stylesheet" />

<!-- 修改的内容 -->
<script>var textarea_name='content';</script>
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="${pageContext.request.contextPath }/js/ueditor/lang/zh-cn/zh-cn.js"></script>

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
<script>
   		window.UEDITOR_HOME_URL = "${pageContext.request.contextPath }/js/ueditor/";
    	var ue = UE.getEditor('editor');
 </script>
<script type="text/javascript">
//跳转翻页
function paging(){
	 var page = document.getElementById("page").value;
	 if(page>${pageResult.totalPageCount}||page<=0||page==null){
		alert("请输入合理页数");
		$("#page").val("");
	}else{
		document.getElementById("pageTo").href="findDiscussion?target=${target}&id=${messageId }&pageNo="+page;
	} 
}
</script>
<!-- 修改内容结束 -->
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
<script language="javascript" type="text/javascript">
	var advInitTop=0;//使层总置于顶端的初始值
	function move()
	{ 
	    window.document.getElementById("mu").style.top=advInitTop+window.document.body.scrollTop;     }
		window.onscroll=move;//窗口的滚动事件,当页面滚动时调用move()函数    
</script>
<style>
.mu {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border: #EDEFF0 solid;
	border-width: 1px;
}

.rightce {
	height: 517px;
	background: #FFFFFF;
	overflow-x: hidden;
	overflow-y: auto;
	float: right;
	margin:-546px -53px 0px 300px;
}

.col-md-9 {
	width: 100%;height:100%;
}
</style>
</head>

<body>
	<div class="linear">
		<!-- 导航栏开始 -->
		<jsp:include page="navigation.jsp"></jsp:include>
		<!-- 导航栏结束 -->
		<!-- 主界面   -->
		<div class="container" style="margin-top:25px; margin-let:215px;">
			<div class="row clearfix">
				<!-- 目录开始 -->
				<div class="col-md-3 "style="width:285px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border:#EDEFF0 solid;border-width:5px; background-color: #FFFFFF;margin:0px -4px 0px -40px;">
					<h4 style="margin: 21px 10px 0px 7px;">
						<s:property value="target" />
						 <span style="float:right;">
							<button type="button" class="btn btn-info btn-xs" onclick="location.href='decide'">&nbsp;返回&nbsp;</button>
						</span>
					</h4>
					<hr style="margin-top: 10px; height:1px;border:none;border-top:2px dotted ;">
					<div class="col-md-12 column" style="overflow-x:hidden;height:380px; ">
						<table class="table table-hover" style="font-size: 12px;">
							<thead>
								<tr>
									<th>日志名称</th>
									<th></th>
									<th>保存时间</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${requestScope.pageResult.items}" var="message">
									<tr>
										<td>
											<p>
												<a href="findDiscussion?id=${message.id }&target=<s:property value="target" />">${message.title }</a>
											</p>
										</td>
										<td></td>
										<td class="p13-999">${message.date}</td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
					<p style="font-size:0.8em;">
						<c:if test="${pageResult.totalPageCount ne 0}">
								共${pageResult.totalPageCount}页，当前是第${pageResult.pageNo}页<input id="page" value="" type="text" size="1px" /><a id="pageTo" onclick="paging();">跳转</a>
								<c:if test="${pageResult.pageNo!=1 }">
									<a href="findDiscussion?pageNo=${pageResult.pageNo -1}&target=${target}&id=${messageId }">上一页</a>
								</c:if>
								<c:if test="${pageResult.pageNo!= pageResult.totalPageCount }">
									<a href="findDiscussion?pageNo=${pageResult.pageNo +1}&target=${target}&id=${messageId }">下一页</a>
								</c:if>
							</c:if>
							<c:if test="${pageResult.totalPageCount eq 0}">
								<center>
									<font color="#6E6E6E">暂无实习记录！</font>
								</center>
							</c:if>
					</p>
				</div>
				<!--目录结束  -->
				<div class="rightce">
					<!--新建 公告开始 -->
					<div class="col-md-12 column mu">
						<h3 style="margin-top:10px;">
							<s:property value="target" />:
						</h3>
						<hr style="margin-top: 10px; height:1px;border-top: solid 1px #cbc9c9;">
						<div style="height:auto;width:900px;margin-right:16px;">
							<!-- 调整总体高度 -->
							<form class="form-horizontal" role="form">
								<div class="form-group">
									<h3>
										<label class="col-sm-2 control-label" style="text-align: center;height: auto;width: 100%;margin-top: -38px;">${message.title }</label>
									</h3>

									
										
											<li class="drop-menu-effect"><p style="word-break:keep-all;margin: 0px 10px 0px 715px;"> ${message.date } &nbsp; &nbsp;&nbsp;浏览记录</p></a>
												<div class="submenu submenu1">
													<div class="mj_menu_news_bg">
														<div class="mj_menu_news_li" style="margin: 56px 0px 0px 786px;font-size:15px;width:134px">
															<a href="###">浏览次数：25</a>
															<p>
																<a href="javascript:void(0);" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123654">浏览人员</a>
															</p>
														</div>
													</div>
												</div></li>
										
									
									<!-- 浏览人员弹框开始 -->
									<div class="modal fade" id="modal-container-123654" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
										<div class="modal-dialog">
											<div class="modal-content" style="width: 234px;height: auto;margin: 0px 0px 0px 176px;">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
													<h4 class="modal-title" id="myModalLabel" style="font-size: 16px;">浏览人员：</h4>
												</div>
												<div class="modal-body" style="font-size: 13px;height:468px;padding: 0px;">
													<div class="col-md-12 column">
														<br />
														<div style="height:380px;">
															<span>张三，李四，王五</span>
															<div class="col-md-12 column">
																<p id="x_content"></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!--  浏览人员弹框结束 -->

									<hr style="margin-top:8px; height:1px;border-top: solid 1px #cbc9c9;">
									<div class="col-sm-8" style="margin: -9px 0px 0px 0px;height:auto;width: 100%;">
										<article>
										<p>${message.message }</p>
										</article>
									</div>
								</div>
								<s:if test="target=='实习记录'">
									<div class="form-group">
										<label class="col-sm-2 control-label"></label>
										<div class="col-sm-8" style="margin: -9px 0px 20px 0px;height: auto;width: 100%;">
											<hr style="margin-top: 10px; height:1px;border-top: solid 1px #cbc9c9;">
											<h4>评论：</h4>
										</div>
									</div>
								</s:if>
							</form>
							<c:forEach items="${requestScope.disscussions }" var="disscussions">
								<div class="form-group" style="margin-top: -16px;">
									<div style="width:350px; magin-top:39px">
										<img src="../img/flag.jpg" width="40" height="40" class="img1" onClick="fun(this.src);" style="cursor:hand;border-radius:17px;/*设定圆角  */" />&nbsp;&nbsp;&nbsp;&nbsp;${disscussions.name }
									</div>
									<div class="col-sm-8"
										style="margin: 9px 0px 0px 0px;height:auto;width: 100%; border:#142ef866 2px solid; font-size:small; line-height:1; overflow:auto; ">
										<article>
										<p>${disscussions.info}</p>
										</article>
									</div>
								</div>
								<hr style="margin: 70px 0px 40px 0px; height:1px;border:none;border-top:1px dashed;">
							</c:forEach>
							<c:if test="${requestScope.disscussions.size()==0 }">
								<center>
									<font color="#6E6E6E">暂无标题！</font>
								</center>
							</c:if>
							
							  <s:if test="target=='实习记录'">  
								<!--只读评论框结束  -->
								<hr style="margin: 70px 0px 40px 0px; height:1px;border-top: solid 1px #cbc9c9;">

								<!-- 发表评论框开始 -->
								<form action="publishDiscussion?id=${messageId }&target=<s:property value="target"/>" method="post">
									<div style=" width:350px; magin-top:39px">
										<img src="../img/flag.jpg" width="40" height="40" class="img1" onClick="fun(this.src);" style="cursor:hand;border-radius:17px;/*设定圆角  */ " />&nbsp;&nbsp;&nbsp;&nbsp;${requestScope.name }
									</div>
									<div id="myDiv"
										style="height:200px;width: 100%; border: #142ef866 2px solid;  font-size:small; line-height:1; overflow:auto; margin:17px 0px 20px 0px;" contenteditable="true">
										<textarea style="height:90px;width: 100%;" id="editor" name="info"></textarea>
									</div>
									<div class="col-sm-8" style="float:right; margin: 9px -383px 39px -85px;">
										<button type="submit" class="btn btn-default btn-info">保存并发表</button>
										&nbsp;&nbsp;
										<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
									</div>
								</form>
							</s:if> 
						</div>
					</div>

					<!-- 新建公告结束 -->
				</div>
			</div>
		</div>
</body>
</html>