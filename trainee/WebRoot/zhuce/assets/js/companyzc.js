
jQuery(document).ready(function() {
	var code;
	var regex1=/^([a-zA-Z0-9_-])+\@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var email = $(this).find('.email').val();
        var news = $(this).find('.news').val();
        var password = $(this).find('.password').val();
        var cpassword = $(this).find('.cpassword').val();
        
		var regex2=/^1[3|4|5|8][0-9]\d{4,8}/;

        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
         if(email == ''||(!regex1.exec(email))) {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
            return false;
        }
        if(news == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.news').focus();
            });
            return false;
        }
       if(news!=code){
	   		alert("验证码有误！");
	   		$(".news").val("");
	   		$(".news").focus();
	   		return false;
       }
        if(password == ''||password.length<6 || password.length>15) {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
       if(cpassword != password){
        	$(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.cpassword').focus();
            });
            $(this).find('.infoId').fadeOut('fast', function(){
                $(this).css('top', '347px');
            });
            $(this).find('.infoId').fadeIn('fast', function(){
                $(this).parent().find('.cpassword').focus();
            });
            return false;
        }
    });
    //在输入内容时叉号和提示信息同时消失
    $('.page-container form .username, .page-container form .email, .page-container form .tel, .page-container form .news, .page-container form .password,.page-container form .cpassword').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.infoId').fadeOut('fast');
    });
	//获取邮箱验证码
    $("#getCodeId").click(function(){
    	var email = $(".email").val();
    	if(email != '' && (regex1.exec(email))){
    		$.ajax({
    			url:"../Functionality/getEmailCode",
    			type:"post",
    			data:{"username":email},
    			async: false,
    			success:function(data){
    				if(data){
    					code= = '${session.emailCode}';
    				}
    			},
    			error:function(){
    				alert("error");
    			}
    		});
    	}else{
    		alert("邮箱不合法！");
    	}
    });
});