$(document).ready(function(){
	//点击编辑遮罩层弹出,取消关闭
	$(".editor").click(function(){
		$(".topup-mask").show();
		$("#cancle").click(function(){
			$(".topup-mask").hide();
		})
	})
	//姓名输入框获取焦点时默认样式修改
	$(".add-data input").focus(function(){
		$(this).css("outline",0);
	})
	//生日按钮选择年月日,点击日期列表显示与影藏切换
	$(".birthday .date").each(function(){
			console.log($(this).index());
		$(this).click(function(){
			if($(this).index()==1)
			{
				$(".year-list").toggle();  //toggle的使用

			}
			if($(this).index()==2)
			{
				$(".month-list").toggle();
			}
			if($(this).index()==3)
			{
				$(".day-list").toggle();
			}
		})
	})
	$(".date ul li").each(function(){
		$(this).click(function(){
			$(this).parent().prev().find("em").html($(this).html());
		})
	})
	//选择性别,背景图片切换
	var sex=null;
	$(".sex span").on("click",function(){
		$(this).siblings("span").css("background","url(../images/bg/sex.png) no-repeat");
        $(this).css("background","url(../images/bg/sex2.png) no-repeat");
        sex=$(this);
	})
	//点击保存，验证姓名，生日，性别，正确则存储cookie 
	$("#save").click(function(){
		if($(".userName input").val()=="")
		{
			$(".test").show();
			$(".testPass .error").css("background","url(../images/icon/error.png)");
			$(".error-text").html("名字不能为空")
		}
		var obj=$.cookie();
		var arr=[];
		$.each(obj,function(i,v){ //jquey each()方法遍历对象
            arr.push(v)
		})
		var phone=arr[0];
		$.cookie("name"+phone,$(".userName input").val(),{expires:7,path:"/"});
		$.cookie("birthday"+phone,$(".year").text()+"-"+$(".month").text()+"-"+$(".day").text(),{expires:7,path:"/"});
		$.cookie("sex"+phone,sex.text(),{expires:7,path:"/"});
		$(".topup-mask").hide();
	})
	//点击退出按钮，跳转页面到小米登录界面
	$(".back").click(function(){
		window.location.href="login.html";
	})
})