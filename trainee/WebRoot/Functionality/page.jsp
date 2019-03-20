<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>实习生管理系统</title>
<link rel="stylesheet" href="../css/zzsc.css" type="text/css">
<script src="../js/jquery.min.js"></script>
</head>
<body>
<!-- 代码 开始 -->
<div class="pagnation" id="pagnation" style="margin: 15px 0px 30px 0px;">
	<a href="javascript:void(0)" class="page-prev">上一页</a>
	<c:forEach begin="${pageResult.pageNo }" end="${pageResult.totalPageCount<pageResult.pageNo+3?pageResult.totalPageCount:pageResult.pageNo+3 }" var="i">
		<a href="javascript:void(0)" onclick="toPage('${i}')">${i }</a><!-- class=current -->
	</c:forEach>
	<a href="javascript:void(0)" class="page-next">下一页</a>
</div>
<!-- 代码 结束 -->
</body>
</html>
