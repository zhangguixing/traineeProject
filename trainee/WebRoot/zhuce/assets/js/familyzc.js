
jQuery(document).ready(function() {

	var code;
	var regex=/^1[34578]\d{9}$/;
    $('.page-container form').submit(function(){
    	var tel = $(this).find('.tel').val();
        var username = $(this).find('.username').val();
        var tel = $(this).find('.tel').val();
        var news = $(this).find('.news').val();
        var password = $(this).find('.password').val();
        var cpassword = $(this).find('.cpassword').val();
        

        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(tel == ''||(!regex.exec(tel))) {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.tel').focus();
            });
            return false;
        }
        if(news != code){
        	alert("验证码有误！");
        	$(".news").val('');
        	$(".news").focus();
        	return false;
        }
        if($.trim(news) == '' || $(".but").val()=="" || $(".but").val() != $("news").val()) {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
            	$(this).parent().find('.news').val("");
                $(this).parent().find('.news').focus();
            });
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
                $(this).css('top', '305px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.cpassword').focus();
            });
            $(this).find('.infoId').fadeOut('fast', function(){
                $(this).css('top', '372px');
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
    $(".but").click(function(){
    	var tel = $(".tel").val()
    	 if(tel == ''|| (!regex.exec(tel))) {
             $('.page-container form').find('.error').fadeOut('fast', function(){
                 $(this).css('top', '96px');
             });
             $('.page-container form').find('.error').fadeIn('fast', function(){
                 $(this).parent().find('.tel').focus();
             });
         }else{
        	 $.ajax({
        		 url:"../Functionality/getPhoneCode",
        		 type:"post",
        		 data:{"username":tel},
        		 success:function(data){
        			 if(data){
        				 code='${session.phoneCode}';
        			 }
        		 },
        		 error:function(){
        			 alert('error');
        		 }
        	 });
         }
    });
});
