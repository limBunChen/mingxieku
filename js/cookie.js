function setCookie(mKey,mValue,mTime){
	var myCookie="";
	//这里需要编码的原因是因为防止方便存储了中文之后浏览器能够识别。
	myCookie=myCookie+encodeURIComponent(mKey)+"="+encodeURIComponent(mValue);
	if(mTime instanceof Date){
		myCookie=myCookie+";expires="+mTime;
	}
	document.cookie=myCookie;
	console.log(document.cookie);
	return myCookie;
}

function getCookie(mKey){//放回键对应的值
	var mCookie=decodeURIComponent(document.cookie);
	console.log(mCookie);
	if(mCookie.length==0){
		return ;
	}
	var cArr=mCookie.split("; ");
	for(var i=0;i<cArr.length;i++){
		var arr=cArr[i].split("=");
		if(mKey==arr[0]){
			return arr[1];
		}
	}
	return ;
}

//function getCookie(){//返回一个值的数组
//  var arrCookie = [];
//  var mCookie=document.cookie;
//  if(mCookie.length==0){
//      return ;
//  }
//  var cArr=mCookie.split("; ");
//  for(var i=0;i<cArr.length;i++){
//      var arr=cArr[i].split("=");
//      arrCookie[i] = arr[1];
//  }
//  return arrCookie;
//}


function delCookie(mKey){
	var mCookie=document.cookie;
	var date=new Date();
	if(mCookie.length){
		var cArr=mCookie.split("; ");
		for(var i=0;i<cArr.length;i++){
			var arr=cArr[i].split("=");
			if(mKey==arr[0]){
				document.cookie=mKey+"="+"0"+";expires="+date;
			}
		}
	}
}
