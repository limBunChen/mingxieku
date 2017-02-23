$(function(){
    //轮播图
    //利用jion添加图片
    $.get("js/json.json",function(res){
        for(var i = 0;i<res.lbt_url.length;i++){
            $("#lbt_ul1").append('<li><a href=""><img src="'+ res.lbt_url[i] + '" alt="" /></a></li>')
             $("#lbt_ul2").append('<li><a href="javaScript:;"></a></li>');
        }
        $("#lbt_ul1 > li").css("opacity","0")
        $("#lbt_ul1 > li").first().fadeTo(500,1);
        $("#lbt_ul2 > li").eq(0).children().addClass("on");
        var index = 0;
        //自动滚动
        var timer = setInterval(move,2000)
        //点击下面的按钮
        $("#lbt_ul2 > li").hover(function(){
            index = $(this).index();
            $("#lbt_ul1 > li").eq(index).fadeTo(500,1).siblings().css("opacity","0");
            $(this).children().addClass("on").parent().siblings().children().removeClass("on");
        })
        //手标的移入,移出
        $("#lbt").hover(
            function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(move,2000);
            }
        )
        function move(){
            index++;
            if($("#lbt_ul1 > li").length == index){
                index=0;
            }
            $("#lbt_ul1 > li").eq(index).fadeTo(500,1).siblings().css("opacity","0");
            $("#lbt_ul2 > li").eq(index).children().addClass("on").parent().siblings().children().removeClass("on");
        }
    })
    
	//#spfl
	$("#spfl > li > a").each(function(index){
		$(this).css("background","url(img/images/sysp"+ index +".gif) no-repeat left center");
	})
	$("#spfl > li").hover(function(){
		$(this).css("background","#070602").children("a").animate({
			"left":10
		},100);
		$(this).children("span").show();
		//左边的导航栏的子导航  相对于#lbt定位
        var i = $(this).index();
		$("#ydtxx_kz").show().css("top",-385 * i);
	},function(){
		$(this).css("background","none").children("a").animate({
			"left":0
		},100);
		$(this).children("span").hide();
		$("#ydtxx_kz").hide().hover(function(){
		    $(this).show();
		    $(this).find("h4").hover(function(){
		        $(this).children().first().animate({
		            "marginLeft":10
		        })
		    },function(){
		       $(this).children().first().animate({
                    "marginLeft":0
                },10) 
		    })
		},function(){
		    $(this).hide();
		});
	})
	//女装专场
	$("#nzzq > div").hover(function(){
		$(this).siblings().css({
			'background': '#5b599a',
		})
	},function(){
		$(this).siblings().css({
			'background': 'none',
		})
	})
	/*content  pp*/
    $.get("js/json.json",function(res){
        for(var i = 0;i<res.pp.length;i++){
            $("#pp").append('<a href=""><span></span></a>');
        }
        $("#pp a").each(function(i){
            $("#pp a").eq(i).css("background","url(" + res.pp[i] + ")");
        })
        //用json写的元素的事件必须放在添加之后并且是在get()里面
        $("#pp a").hover(function(){
            $(this).children().css("top","0")
        },function(){
            $(this).children().css("top","70px")
        })
    })
	/*content  new_lbt*/
	//轮播图
    $("#new_lbt_btn > li").eq(0).children().addClass("on")
    var clone2 = $("#new_lbt_ul li").first().clone();
    $("#new_lbt_ul").append(clone2);
    var size2 = $("#new_lbt_ul > li").size();
    $("#new_lbt_ul").css("width",size2 * 182);
    var index2 = 0;
    var dWidth2 = 182;
    //自动滚动
    var timer2 = setInterval(moveRight2,2000);
    //手标的移入,移出
    $("#new_lbt").hover(
        function(){
            clearInterval(timer2);
        },
        function(){
            timer2 = setInterval(moveRight2,2000);
        }
    )
    //点击下面的按钮
    $("#new_lbt_btn > li").mouseover(function(){
        $(this).children().addClass("on").parent().siblings().children().removeClass("on");
        index2 = ($(this).index());
        $("#new_lbt_ul").css("left",-$(this).index()*dWidth2)
    })
    function moveRight2(){
        index2++;
        if(index2 == size2){
            $("#new_lbt_ul").css("left",0);
            index2 = 1;
        }
        $("#new_lbt_ul").animate({
             "left": -index2 * dWidth2,
        },1000)
        if(index2 == size2 - 1){
            $("#new_lbt_btn > li").eq(0).children().addClass("on").parent().siblings().children().removeClass("on");
        }
         $("#new_lbt_btn > li").eq(index2).children().addClass("on").parent().siblings().children().removeClass("on");
    }
//  content zq
    $("#zq > a").each(function(index){
        $(this).css("background","url(img/zq"+ index +".jpg)").hover(function(){
	        $(this).children().animate({
	            "opacity":1
	        },100);
	    },function(){
	        $(this).children().animate({
	            "opacity":0
	        },10);
	    })
    })
//content    f_img   F1_img
	$("#f_img,#F1_img").hover(function(){
		$(this).animate({
			"width":"+=8px",
			"left":"-=8px"
		},100);
	},function(){
		$(this).animate({
			"width":"-=8px",
			"left":"+=8px"
		},100);
	})
//content  c_ydxb xz0
    $("#xz0 li a").each(function(i){
        $(this).css("background","url(img/ydxb"+ i +".jpg)").hover(function(){
	        $(this).animate({
	        	"backgroundPositionX":"-=15px",
	        })
        },function(){
        	$(this).animate({
	        	"backgroundPositionX":"+=15px",
	        })
        })
    })
//content  c_ydxb F1_xz0
	$("#F1_xz0 li a").each(function(i){
        $(this).css("background","url(img/F1"+ i +".jpg)").hover(function(){
	        $(this).animate({
	        	"backgroundPositionX":"-=5px",
	        })
        },function(){
        	$(this).animate({
	        	"backgroundPositionX":"+=5px",
	        })
        })
    })
 //content   F1_ydtxx_ul a   去掉左边框
 	$(".F1_ydtxx_ul a:even").css("borderLeft","none");
//content #F1_ydtxx_ul
    $("#F1_ydtxx_ul a").hover(function(){
//      if($(this).find("img").length == 0)  这里的判断是为了没有img标签的a标签不受影响
        if($(this).find("img").length == 0){}else{
            $(this).css("background","#666666").find("img").hide();
        }
    },function(){
        $(this).css("background","white").find("img").show();
    })
/*countent  ppShow*/
    $.get("js/json.json",function(res){
        for(var i = 0;i<res.pp_show.length;i++){
            $("#ppShow").append('<a href=""><span></span></a>');
        }
        $("#ppShow a").each(function(i){
            $("#ppShow a").eq(i).css("background","url(" + res.pp_show[i] + ")");
        })
        $("#ppShow a").hover(function(){
            $(this).children().show().css("top","0")
        },function(){
            $(this).children().hide().css("top","70px")
        })
    })
/*countent  lSpfl_box  img   当手标移入图片时文字的颜色发生改变*/
//  $(".img").hover(function(){
//      $(this).prev().children("a").addClass("color");
//  },function(){
//      $(this).prev().children("a").removeClass("color");
//  })
//#footer_bottom #roll ul  滚动字幕
    function gunDong(){
        $("#roll ul").animate({
            "marginTop":"-=32"
        },2000,function(){
            if(parseInt($(this).css("marginTop")) == -($(this).children().length - 1) * $(this).children().height()){
                gunDong();
                $("#roll ul").css("marginTop","0");
            }else{
                gunDong();
            }
        })
    }
    gunDong();
    //把含有url样式的所有a标签链接到sell.html页面
    var date = new Date();
    date.setDate(date.getDate()+7);
    $("a").each(function(index,self){
        $(this).attr("index",index);
    })
    $("a").click(function() {
//      alert($(this).attr("index"));
        setCookie("url", decodeURIComponent($(this).css("backgroundImage")), date);
        
        setCookie("index",$(this).attr("index"),date);
    })
})

