$(document).ready(function(){
	var phoneNum=window.location.search.replace(/\?/,"");
	$(".phone-number").html(phoneNum);
	//两个输入框失去焦点事件
	$(".input1").blur(function(){
		testPw($(this));
	})
    //两个输入框的获取焦点事件
    $(".regbox input").each(function(){
    	$(this).focus(function(){
    	    $(".testPass em").css("display","none");
    	    $(".testPass .error-text").html("密码长度8到16位数字，字母，字符至少包含两种");
    		$(this).css({
    			"border":"1px solid #e8e8e8",
  				"outline":"0"  //取消输入框获取焦点是的默认样式
    		});
    	})
    })
    //提交按钮事件
    $(".btn").click(function(){
    	if(testPw($(".input1"))&&testPw($(".input2")))
    	{
	        $.cookie("password"+phoneNum,$(".input1").val(),{expires:7,path:"/"});
	    	document.location.href="success.html";	
	    }
       
    })

	function testPw(input){
		if(input.val()=="")
		{
            $(".testPass em").css("display","block");
		    $(".testPass .error").css("background","url(../images/icon/error.png)");
		    $(".testPass .error-text").html(input.attr("placeholder"));	
		    input.css("border","1px solid #ff6700");	
		    return false;
	    }
	    else if(input.attr("placeholder")=="请输入确认密码")
	    {
	    	if(input.val()!=$(".input1").val())
	    	{
	            $(".testPass em").css("display","block");
			    $(".testPass .error").css("background","url(../images/icon/error.png)");
		        $(".testPass .error-text").html("两次输入密码不一致")
		        input.css("border","1px solid #ff6700");
		        return false;			
	    	}
	    	return true;
	    }
	    var num=input.val();
	    var reg=/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,16}/
	    if(!reg.test(num)){
	    	$(".testPass em").css("display","block");
			$(".testPass .error").css("background","url(../images/icon/error.png)");
		    $(".testPass .error-text").css("color","#ff6700")
            $(".regbox input").css("border","1px solid #ff6700");
            return false;
	    }
	    return true;
	}


	




})