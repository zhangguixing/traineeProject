<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport"
        content="width=device-width, initial-scale=1">
<title>瀑布流相册可点击放大</title>
<!-- Set render engine for 360 browser -->
<meta name="renderer" content="webkit">
<!-- No Baidu Siteapp-->
<meta http-equiv="Cache-Control" content="no-siteapp"/>
<!-- Add to homescreen for Chrome on Android -->	
<meta name="mobile-web-app-capable" content="yes">
<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Amaze UI"/>
<link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png">
<!-- Tile icon for Win8 (144x144 + tile color) -->
<meta name="msapplication-TileImage" content="assets/i/app-icon72x72@2x.png">
<meta name="msapplication-TileColor" content="#0e90d2">
<link rel="stylesheet" type="text/css" href="../pubuliu/css/style1.css" />
<script src="../pubuliu/js/modernizr-custom.js"></script>

	<!--[if IE]>
		<script src="http://libs.baidu.com/html5shiv/3.7/html5shiv.min.js"></script>
	<![endif]-->
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
<style type="text/css">
#imghead {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);width: 150px;height: 134px;margin:-12px 0px -19px 148px;"}
</style>
<style>
.m{width: 736px;height: 35px;overflow: hidden;margin: 5px 0;font-size: 14px;margin-left:1156px}
.m a{display: block;float: left;padding: 0 16px;height: 28px;line-height: 26px;text-align: center;background: #f0f3f3;margin: 2px 10px 0 0;border-radius: 20px;color: #666; box-shadow: -1px 3px 4px rgba(0,0,0,.2)}
.m a:hover{background: #16debd; color: #fff;text-decoration:none;}
.m a.actived{background: #16debd; color: #fff;text-decoration:none;}
</style>
<!-- 上传图片 -->
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
</head>
<body class="demo-1">
<div class="container">
	<div class="content">
		    <div class="m" onclick="location.href='javascript:void(0);style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123457"><a>新建</a></div>
		    <div class="modal fade" id="modal-container-123457" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			      <div class="modal-dialog">
				      <div class="modal-content">
						    <div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						   </div>	
					       <div style="margin:0px 0px 0px 13px;">
								<form name="demoForm" id="demoForm" method="post" enctype="multipart/form-data" action="javascript: uploadAndSubmit();"style="overflow: hidden;">
							    	<div class="modal-body" style="font-size: 13px;">	
							    	    <div>			  
										  <input type="file" name="file" style="width: 200px; height: 25px;margin: 10px 0px -28px 0px;" onchange="previewImage(this)" id="upload" />
										</div>
										<div id="preview" >	
                                          <img title="要上传的图片" id="imghead" src="../img/photo.png" style="width: 150px;height: 134px;margin:-12px 0px -19px 148px;"/>
										</div>
									</div>						
							    </form>
							</div> 	      						  
							<div class="modal-body" style="font-size: 13px;height:402px;">
								<div style="color:#666666;">														  			  
									   <form action="?" id="con" class="con" name="form1" method="post" style="width:100%;">
									     <textarea id="cot" class="cot" name="content" style="width:100%;height:380px;">
									             请输入内容.......
									     </textarea>
									   </form>
								 </div>		     
							</div>
					      <div class="modal-footer">
			     			  <div class="col-sm-8" style="float:right;" >
						      	<button type="button" class="btn btn-default btn-info">保存并发表</button>&nbsp;&nbsp;
								<button type="button" class="btn btn-default"  data-dismiss="modal">取消</button> 
								
						      </div>   
				   		 </div>	     				        						 
					</div>	
				  </div>   								
			</div>
		<div class="grid">
			<div class="grid__item" data-size="1280x853"> 
			    <a href="../pubuliu/images/weix/1.png" class="img-wrap"><img src="../pubuliu/images/weix/1.png" alt="img1" />
				<div class="description description--grid">学校是经国家教育部批准，于2003年9月由张家口医学院、张家口师范专科学校和张家口农业高等专科学校三所省属高校合并组建而成。张家口医学院的前身是1945年建立的晋察冀白求恩卫生学校
该文章《河北北方学院教务系统》来源于出国留学网</div>
				</a> 
				<div class="g_m">
				<p class="g_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="958x1280"> 
			    <a href="../pubuliu/images/weix/2.png" class="img-wrap"><img src="../pubuliu/images/weix/2.png" alt="img2" /> 
				<div class="description description--grid">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</div>
				 </a>
				 <div class="grid_m">
				 <p class="grid_p">在川湘交界的茶峒附近，小溪白塔旁边，住着主人公翠翠和她爷爷老船夫。茶峒城里有个船总叫顺顺，他有两个儿子，老大叫天保，老二叫傩送。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div> 
			</div>
			
			<div class="grid__item" data-size="1280x853"> 
			    <a href="../pubuliu/images/weix/3.png" class="img-wrap"><img src="../pubuliu/images/weix/3.png" alt="img3" />
				<div class="description description--grid">碧溪边只听过一夜傩送的歌声，后来，歌却再没有响起来。老船夫忍不住去问，本以为是老大唱的，却得知：唱歌人是傩送</div>
				</a> 
				<div class="grid_m">
				 <p class="grid_p">在川湘交界的茶峒附近，小溪白塔旁边，住着主人公翠翠和她爷爷老船夫。茶峒城里有个船总叫顺顺，他有两个儿子，老大叫天保，老二叫傩送。</p>
				</div> 
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="865x1280"> 
			    <a href="../pubuliu/images/weix/4.png" class="img-wrap"><img src="../pubuliu/images/weix/4.png" alt="img4" />
				<div class="description description--grid">在川湘交界的茶峒附近，小溪白塔旁边，住着主人公翠翠和她爷爷老船夫。</div>
				</a>
				<div class="grid_m">
				 <p class="grid_p">碧溪边只听过一夜傩送的歌声，后来，歌却再没有响起来。老船夫忍不住去问，本以为是老大唱的，却得知：唱歌人是傩送 </p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x1280"> 
				<!-- <a href="../pubuliu/images/weix/5.png" class="img-wrap"><img src="../pubuliu/images/weix/5.png" alt="img5" />
				<div class="description description--grid">Desideratum</div>
				</a> --> 
				<div class="grid_m">
				 <p class="grid_p">碧溪边只听过一夜傩送的歌声，后来，歌却再没有响起来。老船夫忍不住去问，本以为是老大唱的，却得知：唱歌人是傩送 </p>
				 <div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
				</div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/6.png" class="img-wrap"><img src="../pubuliu/images/weix/6.png" alt="img6" />
				<div class="description description--grid">Quixotic</div>
				</a> -->
				<div class="grid_m">
				<p class="grid_p">前清解甲流落军官“顺顺”凭着一些积蓄经营木船，事业兴旺发达，又因大方洒脱，仗义慷慨，诚信公道，被众举为“掌水码头”一方豪杰绅士</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/7.png" class="img-wrap"><img src="../pubuliu/images/weix/7.png" alt="img7" />
				<div class="description description--grid">Quixotic</div>
				</a> --> 
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/8.png" class="img-wrap"><img src="../pubuliu/images/weix/8.png" alt="img8" />
				<div class="description description--grid">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。</div>
				</a> 
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
			    <a href="../pubuliu/images/weix/9.png" class="img-wrap"><img src="../pubuliu/images/weix/9.png" alt="img9" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a> 
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/1.png" class="img-wrap"><img src="../pubuliu/images/weix/1.png" alt="img10" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div> 
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/2.png" class="img-wrap"><img src="../pubuliu/images/weix/2.png" alt="img11" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>  -->
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/3.png" class="img-wrap"><img src="../pubuliu/images/weix/3.png" alt="img12" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/4.png" class="img-wrap"><img src="../pubuliu/images/weix/4.png" alt="img13" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/5.png" class="img-wrap"><img src="../pubuliu/images/weix/5.png" alt="img14" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>  -->
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/6.png" class="img-wrap"><img src="../pubuliu/images/weix/6.png" alt="img15" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a>
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div> 
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/7.png" class="img-wrap"><img src="../pubuliu/images/weix/7.png" alt="img16" />
				<div class="description description--grid">集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚</div>
				</a> -->
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<a href="../pubuliu/images/weix/8.png" class="img-wrap"><img src="../pubuliu/images/weix/8.png" alt="img17" />
				<div class="description description--grid">Quixotic</div>
				</a>
				<div class="grid_m">
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div> 
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
			<div class="grid__item" data-size="1280x850"> 
				<!-- <a href="../pubuliu/images/weix/9.png" class="img-wrap"><img src="../pubuliu/images/weix/9.png" alt="img18" />
				<div class="description description--grid">Quixotic</div>
				</a>  -->
				<div class="grid_m"> 
				<p class="grid_p">河北北方学院座落在素有北京“北大门”和“后花园”之称的塞外名城张家口市。集长城草原之灵蕴，得张垣文化之精髓，办学历史悠久，文化积淀深厚，是河北省北部唯一具有硕士学位授予权的综合性本科院校
该文章《河北北方学院教务系统》来源于出国留学网。</p>
				</div>
				<div>
				  	<a href="javascript:void(0);"  style="text-decoration: none;margin:0 8px 0 174px" data-toggle="modal" data-target="#modal-container-123457">
					<img src="../img/edit.png" data-toggle="tooltip" data-placement="bottom" title="编辑" data-original-title="编辑"></a>
					&nbsp;
			    	<a href="javascript:void(0);" onclick="javascript:return del();" style="text-decoration: none;" data-toggle="modal" data-target="#modal-container-123459">
					<img src="../img/del.png" data-toggle="tooltip" data-placement="bottom" title="删除" data-original-title="删除" ></a>
				 </div>
			</div>
			
		</div>
		<!-- /grid -->
		<div class="preview">
			<button class="action action--close"><i class="fa fa-times">x</i><span class="text-hidden">Close</span></button>
			<div class="description description--preview"></div>
		</div>
		<!-- /preview -->
	</div>
</div>
<!-- /container -->
	<script src="../pubuliu/js/imagesloaded.pkgd.min.js"></script>
	<script src="../pubuliu/js/masonry.pkgd.min.js"></script>
	<script src="../pubuliu/js/classie.js"></script>
	<script src="../pubuliu/js/main.js"></script>
	<script>
		(function() {
			// create SVG circle overlay and append it to the preview element
			function createCircleOverlay(previewEl) {
				var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				dummy.setAttributeNS(null, 'version', '1.1');
				dummy.setAttributeNS(null, 'width', '100%');
				dummy.setAttributeNS(null, 'height', '100%');
				dummy.setAttributeNS(null, 'class', 'overlay');
				var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
				var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				circle.setAttributeNS(null, 'cx', 0);
				circle.setAttributeNS(null, 'cy', 0);
				circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(previewEl.offsetWidth,2) + Math.pow(previewEl.offsetHeight,2)));
				dummy.appendChild(g);
				g.appendChild(circle);
				previewEl.appendChild(dummy);
			}
			
			new GridFx(document.querySelector('.grid'), {
				onInit : function(instance) {
					createCircleOverlay(instance.previewEl);
				},
				onResize : function(instance) {
					instance.previewEl.querySelector('svg circle').setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
				},
				onOpenItem : function(instance, item) {
					// item's image
					var gridImg = item.querySelector('img'),
						gridImgOffset = gridImg.getBoundingClientRect(),
						win = {width: document.documentElement.clientWidth, height: window.innerHeight},
						SVGCircleGroupEl = instance.previewEl.querySelector('svg > g'),
						SVGCircleEl = SVGCircleGroupEl.querySelector('circle');
						
					SVGCircleEl.setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
					// set the transform for the SVG g node. This will animate the circle overlay. The origin of the circle depends on the position of the clicked item.
					if( gridImgOffset.left + gridImg.offsetWidth/2 < win.width/2 ) {
						SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(' + win.width + ', ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
					}
					else {
						SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(0, ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
					}
				}
			});
		})();
	</script>
</body>
</html>
