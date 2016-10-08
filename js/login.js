$(document).ready(function(){
	$("#login").click(function(){
        if(testData($(".userId"))&&testData($(".pw")))
        {
        	window.location.href="../index.html?"+true+"&"+$(".userId").val();
        }else{
        	 $(".testPhone").show();
			 $(" .error").css("background","url(../images/icon/error.png)");
		     $(".testPhone .error-text").html("账号或密码错误")
        }
        
	})


	function testData(str) {
		var flag=false;
		if(str.val()==""){
			 $(".testPhone").show();
			 $(" .error").css("background","url(../images/icon/error.png)");
			 if(str.attr("placeholder")=="密码"){
		     $(".testPhone .error-text").html("请输入密码")
			 }else{
		     $(".testPhone .error-text").html("请输入账号")}
		}else{
			$.each($.cookie(),function(i,v){
                if(("user"+str.val()==i)||($.cookie("password"+$(".userId").val())==str.val()))
                {
                	flag=true;
                }
			})
		  }
		  return flag;
		}
})