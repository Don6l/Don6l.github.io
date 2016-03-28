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

	$(document).on("click", '#dl3', function(){git()});

};

var ggi = function(){
	window.open('http://www.goodgameireland.com');
};

var git = function(){
	window.open('https://github.com/Don6l');
};

var wizardGame = function(){
	window.open('http://don6l.github.io/web');
};