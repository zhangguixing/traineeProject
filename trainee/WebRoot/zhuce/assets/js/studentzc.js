
jQuery(document).ready(function() {
	var regex=/^1[3|4|5|8][0-9]\d{4,8}/;
    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var number=$(this).find('.number').val();
        var tel = $(this).find('.tel').val();
        var password = $(this).find('.password').val();
        var cpassword = $(this).find('.cpassword').val();

        var regex3=/^2[0][0-9]{7}/;
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
         if(number == ''||(!regex3.exec(number))){
        	$(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px'); 
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.number').focus();
            });
            return false;
        }
         if(tel == ''||(!regex.exec(tel))) {
             $(this).find('.error').fadeOut('fast', function(){
                 $(this).css('top', '165px');
             });
             $(this).find('.error').fadeIn('fast', function(){
                 $(this).parent().find('.tel').focus();
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
       if(password != cpassword){
        	$(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
                $(".infoId").html("<font color=red>两次密码不一致！</font>");
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

    $('.page-container form .username, .page-container form .number, .page-container form .news, .page-container form .password,.page-container form .cpassword').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.infoId').fadeOut('fast');
    });
});
