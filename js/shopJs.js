$(function(){
    var date = new Date();
    date.setDate(date.getDate());
    var date1 = new Date();
    date1.setDate(date1.getDate() + 7);
//浏览记录
	$("#lljl li").hover(function(){
		$(this).css("borderColor","black").find("#lljl_kz").show();
	},function(){
		$(this).css("borderColor","white").find("#lljl_kz").hide();
	})
//#dele
    $("#dele").click(function(){
        //这里找到父亲的意思是  防止一次性改变多个
        var parset = $(this).closest("#sp");
        var spsl = parseInt($("#spsl_spsl").text());
        var zMoney = parseInt($("#zMoney").html().split("￥")[1]);
        var text1 = parseInt(parset.find(".text1").val());
        var xj = parseInt(parset.find(".sp_xj").html().split("￥")[1]);
        $("#spsl_spsl").text(spsl - text1);
        $("#zMoney").html("￥" + (zMoney - xj) +'.00');
        //这里是清除对应的cookie值  是为了防止刷新之后上次删除的数据再次现.
        setCookie(parset.attr("biaoJi")," ",date);
        parset.remove();
        //这里是删除购物车所有商品之后恢复购物车原来的样子
        if($("#tjsp").children().length == 2){
            $("#gwc").show();
            $("#tjsp_box").hide();
        }
        //保存购物车商品的总数  方便首页中读取
        setCookie("zsl",$("#spsl_spsl").text(),date1);
    })
//#gmsl  #sub  #add
    $("#sub").click(function(){
        var parset = $(this).closest("#sp");
        var text1 = parset.find(".text1");
        var dj = parseInt(parset.find(".sp_xsjg").html().split("￥")[1]);
        var spsl = parseInt($("#spsl_spsl").text());
        var zMoney = parseInt($("#zMoney").html().split("￥")[1]);
        if(parseInt(text1.val()) != 1){
            text1.val(parseInt(text1.val()) - 1);
            parset.find(".sp_zk").html("-￥" + parseInt(text1.val()) * 13 + '.00');
            parset.find(".sp_xj").html("￥" + (dj - 13) * parseInt(text1.val()) + '.00');
            $("#spsl_spsl").text(spsl - 1);
            $("#zMoney").html("￥" + (zMoney - (dj - 13)) +'.00');
        }
        //保存购物车商品的总数  方便首页中读取
        setCookie("zsl",$("#spsl_spsl").text(),date1);
    })
    $("#add").click(function(){
        var parset = $(this).closest("#sp");
        var text1 = parset.find(".text1");
        var dj = parseInt(parset.find(".sp_xsjg").html().split("￥")[1]);
        var spsl = parseInt($("#spsl_spsl").text());
        var zMoney = parseInt($("#zMoney").html().split("￥")[1]);
        text1.val(parseInt(text1.val()) + 1);
        parset.find(".sp_zk").html("-￥" + parseInt(text1.val()) * 13 + '.00');
        parset.find(".sp_xj").html("￥" + (dj - 13) * parseInt(text1.val()) + '.00');
        $("#spsl_spsl").text(spsl + 1);
        $("#zMoney").html("￥" + (zMoney + (dj - 13)) +'.00');
        //保存购物车商品的总数  方便首页中读取
        setCookie("zsl",$("#spsl_spsl").text(),date1);
    })
//利用cookie改变图片
    if(document.cookie != ""){
        console.log(document.cookie);
        //将保存的cookie 分割出来存到数组中去
        var arr = decodeURIComponent(document.cookie).split("; ");
        //i从下标2开始的原因是因为从下标2开始才是存的url,dj,sl
       for(var i = 2;i<arr.length;i++){
           var obj = arr[i];
           //分割
           biaoJi = obj.split("=")[0];
           obj = obj.split("=")[1];
           //转换成json
           obj = JSON.parse(obj);
           for(var j = 0;j<obj.length;j++){
                $("#gwc").hide();
                $("#tjsp_box").show();
                $("#sp").hide();
                //.attr("biaoJi",biaoJi)  设置这个属性值是为了点击删除的时候  清除coolie里对应的值
                $("#tjsp").append($("#sp").clone(true).show().attr("biaoJi",biaoJi));
                $("#sp_spxx img").last().attr("src",obj[j].url);
                var cookie_sl = (parseInt(obj[j].sl));
                $(".text1").last().val(cookie_sl);
                $(".sp_xsjg").html("￥" + obj[j].dj);
                $(".sp_zk").last().html("-￥" + obj[j].sl * 13 + '.00');
                $(".sp_xj").last().html("￥" + (obj[j].dj - 13) * cookie_sl + '.00');
                $("#spsl_spsl").text( parseInt($("#spsl_spsl").text()) + cookie_sl);
                var zMoney = parseInt($("#zMoney").html().split("￥")[1]);
                var xj = parseInt($(".sp_xj").last().html().split("￥")[1])
                console.log(parseInt($(".sp_xj").last().html().split("￥")[1]));
                $("#zMoney").html("￥" + (zMoney + xj) +'.00');
            }
            //保存购物车商品的总数  方便首页中读取
            setCookie("zsl",$("#spsl_spsl").text(),date1);
        }
    }
})



