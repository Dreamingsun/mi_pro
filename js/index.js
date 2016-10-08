$(document).ready(function($) {
	var flag=window.location.search.replace(/\?/,"").split("&");
	console.log($.cookie());
	//如果用户已登录slideDown(),slideUp()实现上下互动效果
	if(flag[0])  
	{  //登录按钮获取用户名
		$(".index-login b").html($.cookie("name"+flag[1]))
		$(".index-login .user-icon").css("background","url(images/icon/iconfont_up.png) no-repeat center")
		//注册按钮变为我的订单
		$(".reg").html("我的订单");
		$(".reg").attr("href","###");
		//登录按钮的滑动效果
		$(".index-login").hover(function(){
				$(this).css({"color":"#ff6700","background":"#fff"});
				$(this).find("i").css("background","url(images/icon/iconfont_up2.png) no-repeat center");
				$(".user-list").slideDown();
			},function(){
				$(this).css({"color":"#424242"});
				$(".index-login .user-icon").css("background","url(images/icon/iconfont_up3.png) no-repeat center");
		})
		$(".user").mouseleave(function(){//用mouseout不起作用
				$(".user-list").slideUp();
				$(".index-login").css({"color":"#b0b0b0","background":"#333"});
				$(".index-login .user-icon").css("background","url(images/icon/iconfont_up.png) no-repeat center")
		})
	

	}else{//用户还没有登录
		$(".index-login").find("i").css("display","none");
		$(".index-login").css({"width":"auto"});
		$(".topbar_info .user").css({"width":"auto"});
		$(".index-login").click(function(){
			window.location.href="html/login.html";
		})
	}
	$(".topbar_info").find("a").click(function(){
		$(this).css({"color":"#b0b0b0","textDecoration":"none"})
	})
    //购物车滑动效果
		$("#cart").hover(function(){
		$(".cart-content").css("display","block");
	},function(){
		$(".cart-content").css("display","none");
	})
	
    //header-nav滑动效果,获取json数据
    $.get("js/index.json",function(data){
    	var obj=data.result["header-nav"];
    	$(".header-nav ul").find(".nav-item").each(function(i){
    		if(i>=1&&i<=7)
    		{
	    		$(this).mouseenter(function(){
	    		    var str="";
	    			$(".header-nav-menu").slideDown();
	    			var index=$(this).index();
	    			var d=obj[index-1]
	    			for(var i=0;i<d.length;i++)
	    			{
	                    str+="<li><a class='pro-img' href='html/details.html'><img src='"+d[i].img+"'><a href='html/details.html' class='title'>"+d[i].name+"</a><p class='price'>"+d[i].price+"</p></li>"
	    			}
	    			$(".header-nav-menu ul").html(str);
	    			$(".header-nav-menu ul li").eq(0).addClass("bef-none");
	    		})
    		}else{
    			$(this).mouseenter(function(){
    				$(".header-nav-menu").slideUp();
    			})
    		}
    	})
    	$(".header-nav ul").mouseleave(function(){
    		$(".header-nav-menu").slideUp();
    	})
    })

    // 侧导航栏滑动效果
    $(".site-category-list").find("li").each(function(){
    	$(this).mouseenter(function(){
    		var list=""
    		var index=$(this).index();
    		$(".list-item-category").show();
    		$.get("js/index2.json",function(data){
    			//console.log(data.result);
    			var result=data.result;
    			var d1=result[index*2]["category"];
    			var d2=result[index*2+1]["category"];
    			var i=0;
    			//$("<div class='goods-container left'></div>").appendTo("list-item-category");
    			for(var j=0;j<d1.length+d2.length;j++){
    				if(j%6==0 && j!=0)
    				{
    					$(".list-item-category .goods-container").eq(i).html(list);
    					i++;
    					list="";
    					$(".list-item-category").append("<div class='goods-container left'></div>")
    					//$("<div class='goods-container left'></div>").appendTo("list-item-category");
    					//console.log($(".list-item-category").html())
    				}
    				if(j<d1.length){
    					console.log(index)
    					if(index<=1&&d1[j].price!=undefined){
	        			list+="<p class='star-goods'><a class='goods-link'><img src='"+d1[j].img+"'/><b class='name'>"+d1[j].name+"</b></a><a class='buy' href='details.html'>选购</a></p>"   					
	        		    }else{
	        			list+="<p class='star-goods'><a class='goods-link'><img src='"+d1[j].img+"'/><b class='name'>"+d1[j].name+"</b></a></p>"   					
	        		    }
    				}else{
    					if(index<=1&&d2[j-d1.length].price!=undefined){
	        			      list+="<p class='star-goods'><a class='goods-link'><img src='"+d2[j-d1.length].img+"'/><b class='name'>"+d2[j-d1.length].name+"</b></a><a class='buy' href='details.html'>选购</a></p>"   					
	        		       }else{
	        		          list+="<p class='star-goods'><a class='goods-link'><img src='"+d2[j-d1.length].img+"'/><b class='name'>"+d2[j-d1.length].name+"</b></a></p>"   					
                          }
	        		    }
    		   }
    	$(".list-item-category .goods-container").eq(i).html(list);
    	$(".list-item-category").css("width",265*(i+1));

    		})
    	})
    })
   

		// $(".index-login").click(function(){
		// 	window.location.href="html/login.html";
		// })
})