$(function(){
//显示购物车中商品的个数
    if(document.cookie != undefined){
        $("#gwc_zs").text(getCookie("zsl"));
    }
//利用cookie改变图片
    if(document.cookie != ""){
        //"img" + getCookie("url").split("/img")[1].split('")')[0]是为了从url=url("file:///D:/名鞋库/img/F115.jpg");中分离出图片的路径F115.jpg  
        //然后拼接上前面的img就是一个完整的路径了
        $(".picture").attr("src","img" + getCookie("url").split("/img")[1].split('")')[0]);
        $("#dt").attr("src","img" + getCookie("url").split("/img")[1].split('")')[0]);
        $(".picture").attr("index",getCookie("index"));
    }
//  #dj   给一个随意的单价
//  $(".dj").text("￥" + parseInt(Math.random()*300 + 150) + ".00");
//  #zm #zm1 li
    $("#zm1 li").click(function(){
        $(this).toggleClass("click").children("img").toggleClass("show").parent().siblings().removeClass("click").children("img").removeClass("show");
    })
//#xz  改变选中颜色是的图片
    $("#dt").click(function(){
        $(this).siblings("#xz").toggle();
    })
    //#gmsl  #sub  #add
    $("#sub").click(function(){
        if(parseInt($("#text1").val()) != 1){
            $("#sub").css("background","url(img/xing.png) left -316px");
            $("#text1").val(parseInt($("#text1").val())-1);
            var timer = setTimeout(function(){
                $("#sub").css("background","url(img/xing.png) left -301px");
            },100)
        }
    })
    $("#add").click(function(){
        $("#add").css("background","url(img/xing.png) -15px -316px");
        $("#text1").val(parseInt($("#text1").val())+1);
        var timer = setTimeout(function(){
            $("#add").css("background","url(img/xing.png) -15px -301px");
        },100)
    })
    //#jionS
    var date = new Date();
    date.setDate(date.getDate() + 7);
    $("#jionS").click(function(){
        var arr = [];
        var url = decodeURIComponent($(".picture").attr("src"));
        var index = $(".picture").attr("index");
        var dj = $(".dj").html().split("￥")[1];
        var sl = $("#text1").val();
        var obj = {
            "url":url,
            "dj":dj,
            "sl":sl
        }
        arr.push(obj);
        setCookie("arr" + index,JSON.stringify(arr),date);//需要将数组改变成字符串才能传到cookie中
//      $("#popup").show();
        //点击加入购物车之后实现弹窗效果
//      var flag = false;
//      $("#yes").click(function(){
//          flag = true;
            location.assign("shoppingTrolley.html");
//          $("#popup").hide();
//      })
//      $("#no").click(function(){
//          flag = false;
//          $("#popup").hide();
//      })
    })
})

