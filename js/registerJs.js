$(function(){
    var flag = false;
    $("#text").blur(function(){
        var str = $(this).val();
        if(!/^[1-3][0-9]{10}$/.test(str)){
            $("#tiShi").css("display","inline-block");
            $("#tiShi").text("请输入正确的邮箱账号或手机!");
        }else{
            //利用json判断用户名是否已被注册
            $.get("js/json.json",function(res){
                console.log(res);
                var flag1 = true;
                for(var i = 0;i<res.yhm.length;i++){
                    if(str == res.yhm[i]){
                        flag1 = false;
                        $("#tiShi").css("display","inline-block");
                        $("#tiShi").text("该用户名已被注册");
                    }
                }
                if(flag1){
                    $("#tiShi").css("display","inline-block");
                    $("#tiShi").text("可以使用!");
                    flag = true;
                }
            })
        }
    })
    $("#psd0").blur(function(){
        var str = $(this).val();
        if(!/^\w{6,}$/.test(str)){
            $("#tiShi").css("display","inline-block");
            $("#tiShi").text("密码不能小于六位!");
            flag = false;
        }else{
            $("#tiShi").css("display","inline-block");
            $("#tiShi").text("可以使用!");
            flag = true;
        }
    })
    $("#psd1").blur(function(){
        var str1 = $("#psd0").val();
        var str = $(this).val();
        if(str1 != str){
            $("#tiShi").css("display","inline-block");
            $("#tiShi").text("确认密码不正确!");
            flag = false;
        }else{
            $("#tiShi").css("display","inline-block");
            $("#tiShi").text("正确!");
            flag = true;
        }
    })
    //产生一个四位数的随机码  有数字和字母组成
    $("#yzm1").val(Yzm());
    $("#hgtp").click(function(){
        $("#yzm1").val(Yzm());
    })
    $("#btn").click(function(){
        if(flag){
            var flag2 = true;
            var i = 5;
            //判断所有含有.class的的标签是否为空
            $(".kg").each(function(){
                if($(this).val() == ""){
                    flag2 = false;
                    $("#tiShi").text("不能漏填!");
                }
            })
            if(flag2){
                //弹出窗口
//              $("#popup").show();
//              var timer = setInterval(function(){
//                  $("#speed").text(--i);
//                  if(i == 0){
//                      clearInterval(timer);
                        location.assign("index.html");
//                      $("#popup").hide();
//                  }
//              },1000)
            }
        }
    })
    function Yzm() {
        var oOne = 0;
        var z = "";
        for (var i = 0; i < 4; i++) {
            var one = parseInt(Math.random() * 130);
            if (one >= 65 && one <= 90 || one >= 97 && one <= 122) {
                oOne = String.fromCharCode(one);
            } else {
                oOne = parseInt(Math.random() * 10);
            }
            z = z + oOne;
        }
        return z;
    }
})