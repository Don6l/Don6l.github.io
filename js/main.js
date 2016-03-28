/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	readyAll();
});

var readyAll = function(){
	console.log('readyAll');
	$(document).on("click",'#wizardGame',function(){wizardGame()});
	$(document).on("click", '#ggi', function(){ggi()});
	$(document).on("click", '#dl2', function(){dl2()});
	$(document).on("click", '#dl3', function(){dl3()});

};

var ggi = function(){
	window.open('www.goodgameireland.com');
};

var dl2 = function(){
	alert("Download button two.");
};

var dl3 = function(){
	alert("Download button three.");
};

var wizardGame = function(){
	window.open('http://don6l.github.io/web');
};