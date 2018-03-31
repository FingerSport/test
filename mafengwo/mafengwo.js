window.onload = function(){
	function $(id) {
		return document.getElementById(id);
	}
//新建对象，获取dom元素
	var oContainer = $('container');
	var oImg = oContainer.children;
	console.log(oContainer.children);
	for (var i=0 ; i < oImg.length; i++) {
		oImg[i].style.transform = 'rotateY('+ i*60+'deg) translateZ(200px)' ;
	}
// auto circle play cards
	timer = null;
	count = 1;
	function auto(){
	timer = setInterval(function(){
		oContainer.style.transform = ' rotateY('+count*60+'deg) ';
		count++;
		count %= 360 ; 
		// for ( var i=0;i<6;i++)
		// oImg[i].style = 'z-index:1';
		// oImg[(count-1)%6].style = 'z-index:2';
		console.log(count);
	}, 2000);
	}
	auto();
// set flag to judge clear or run 
	flag = true;
	oContainer.onclick = function(){
		if(flag)
		{clearInterval(timer); flag = false;}
		else
		{auto(); flag = true;}
	};
}