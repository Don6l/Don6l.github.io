/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	readyAll();
});

var readyAll = function(){
	console.log('readyAll');
	$(document).on("click",'#mainButton',function(){mainButton()});
	$(document).on("click", '#dl1', function(){dl1()});
	$(document).on("click", '#dl2', function(){dl2()});
	$(document).on("click", '#dl3', function(){dl3()});
};

var dl1 = function(){
	alert("Download button one.");
};

var dl2 = function(){
	alert("Download button two.");
};

var dl3 = function(){
	alert("Download button three.");
};

var mainButton = function(){
	alert("Main button");
};