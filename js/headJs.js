$(function(){
    // 我的名鞋库 
    $("#my").hover(function(){
        $(this).css({
                "background":"white",
        }).children("ul").show();
    },function(){
        $(this).css({
            "background":"url(img/nav_line.png) right no-repeat",
        }).children("ul").hide();
    })
    // 手机名鞋库
    $("#ip_li").hover(function(){
        $(this).children("#wx").show().siblings("#iphone").css("background","none").siblings("p").css("background","white").parent().css('background',"white");
    },function(){
        $(this).children("#wx").hide().siblings("#iphone").css("background","url(img/nav_bg.png)  right -13px").siblings("p").css("background","#eee").parent().css("background","url(img/nav_line.png) right no-repeat");
    });
    //#search #text  利用json改变搜索框中的内容
    var number = parseInt(Math.random() * 8);
    $.get("js/json.json",function(res){
        $("#text_div #text").val(res.text[number]);
    })
    //购物车
    $("#shop").hover(function(){
        $(this).css("background","url(img/nav_bg.png) left -98px").children("a").css("color","white");
    },function(){
         $(this).css("background","url(img/nav_bg.png) left -64px").children("a").css("color","#666");
    }).click(function(){
        location.assign("shoppingTrolley.html");
    })
    //显示购物车中商品的个数
    if(document.cookie != undefined){
        $("#gwc_zs").text(getCookie("zsl"));
    }
    //nav1
    $("#nav1 #home > li").hover(function(){
        $(this).addClass("nav1Color").prev().css("backgroundImage","none");
        $(this).children("div").show()
    },function(){
        $("#nav1 #home > li").removeClass("nav1Color").children("div").hide();
        $("#nav1 #home > li:not(:last)").css("background","url(img/home_line.png) no-repeat right")
        $("#nav1 #home > li").first().css("background","#444444");
    })
    // nav1  man_kz
    $.get("js/json.json",function(res){
        for(var i = 0;i < res.ydx.length;i++){
            $("#ydx").append('<li><a href="">'+ res.ydx[i]+'</a></li>');
        }
        for(var j = 0;j < res.fz.length;j++){
            $("#fz").append('<li><a href="">'+ res.fz[j]+'</a></li>');
        }
        for(var i = 0;i < res.pptj.length;i++){
            $("#pptj").append('<li><a href=""><img src="'+res.pptj[i]+'"/></a></li>');
        }
    })
})
