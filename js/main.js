/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	$(document).on("click",'#wow',function(){wow()});
	$(document).on("click", '#dl1', function(){dl1()});
});

var dl1 = function(){
	alert("Hey Jasmine, I can see you too!");
	window.open("https://www.facebook.com/LoveTheVisualSystem");
};

var wow = function(){
	alert("Hey Aaron. I can see you");
	window.open("https://www.facebook.com/aaronMquinn");
};