/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	$(document).on("click",'#wow',function(){mainButton()});
	$(document).on("click", '#dl1', function(){dl1()});
});

var dl1 = function(){
	alert("Download button one.");
	
};

var mainButton = function(){
	alert("Main button");
	
};