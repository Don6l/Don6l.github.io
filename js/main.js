/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	$(document).on("click",'#wow',function(){wow()});
});

var wow = function(){
	alert("Hey Aaron. I can see you");
	window.open("https://www.facebook.com/aaronMquinn");
};