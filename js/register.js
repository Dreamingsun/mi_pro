
$(document).ready(function($) {
		$.get("../js/imgtest.json",function(data){
			var rand=0;
		   $(".img-btn").click(function(){//随机生成验证码图片验证码图片
		     	rand=Math.floor(Math.random()*10);
		     	console.log(data[rand]["img-src"])
		     	$(this).css("background","url("+data[rand]["img-src"]+")");

		     })
		   $("#number").blur(function(){//验证码验证
		   			if($(this).val()!=data[rand]["image-text"])
		   			{
		   				$(".testNum").show();
					    $(".testNum .error").css("background","url(../images/icon/error.png)");
					    if($(this).val()=="")
			   			{
			   				$(".testNum .error-text").html("请输入验证码")
			   			}else{
					    $(".testNum .error-text").html("验证码错误")
						}
		   			}

		  		 })
		   $("#number").focus(function(){//重新获取焦点后键盘输入则错误提示消失
		   		$(this).keydown(function(){
		   			$(".testNum").hide();
		   		})
		   })
		})
		//提交表单，存储cookie
		$(".reg").click(function(){
			if($("#number").val()==""||$("#phone").val()==""){
				$(".test").show();
				$(".test .error").css("background","url(../images/icon/error.png)");
				if($("#number").val()==""){$(".testNum .error-text").html("请输入验证码")}
				if($("#phone").val()==""){$(".testPhone .error-text").html("请输入手机号码")}
			}else{
				$.cookie("user"+$("#phone").val(),$("#phone").val(),{expires:7,path:"/"});
				window.location.href="register2.html"+"?"+$("#phone").val();
			}
		})  

		//城市列表展开按钮的hover事件
		$("#region-btn").hover(function(){
			$(this).css({
				"background":"none",
				"border":"1px solid #ccc"
			})
		})
		$(".country").click(function(ev){
			$(".countryList").show();
		});
		/*涉及到了事件冒泡*/
		$(".countryList").find("p").each(function(){
				$(this).click(function(ev){
					var ev = ev || window.event;
					// ev.cancelBubble = true;
					ev.stopPropagation();
					$(".countryList").hide();
				})
	   })
		$(".countryList").find("li").each(function(){
			$(this).click(function(ev){
				$("#region").val($(this).text());
				var ev = ev || window.event;
				// ev.cancelBubble = true;
				ev.stopPropagation();
				$(".countryList").hide();
			})
		})
		//手机号码验证
      $("#phone").blur(function(){
      	testPhonenum($(this).val());
      })
       $("#phone").focus(function(){
      	 $(".testPhone").hide();
      })

    //手机号验证函数
	function testPhonenum(str) {
		if(str==""){
			 $(".testPhone").show();
			 $(" .error").css("background","url(../images/icon/error.png)");
		     $(".testPhone .error-text").html("请输入手机号码")
		}else{
		    var re = /^1\d{10}$/
		    if (!re.test(str)) {
			 $(".testPhone").show();
		     $(".testPhone .error").css("background","url(../images/icon/error.png)");
		     $(".testPhone .error-text").html("手机号码格式错误")
		    }
		  }
		}
});