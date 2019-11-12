/*
* Author: Don6l
*/
$(document).ready(function(){
	console.log('Begin');
	readyAll();
});

var readyAll = function(){
	console.log('readyAll');
	$(document).on("click",'#evac',function(){evac()});
	$(document).on("click",'#linkedIn',function(){linkedIn()});
	$(document).on("click",'#wizardGame',function(){wizardGame()});
	$(document).on("click", '#ggi', function(){ggi()});
	$(document).on("click", '#git', function(){git()});
	$(document).on("click", '#freq', function(){freq()});
	$(document).on("click", '#TOW', function(){tow()});
	$(document).on("click", '#K2CLD', function(){K2CLD()});
	$(document).on("click", '#pixelBuster', function(){pixelBuster()});
};

var linkedIn = function(){
	console.log('linkedIn');
	window.open('https://www.linkedin.com/in/donal-mcclean-34199b96/');
}

var K2CLD = function(){
	console.log('K2CLD');
	window.open('https://itch.io/jam/gmtk-jam/rate/159156');
}

var ggi = function(){
	window.open('http://don6l.github.io/GabeGameV3.zip');
	//alert('Site under maintaince.')
};

var git = function(){
	console.log('git');
	window.open('https://github.com/Don6l');
};

var wizardGame = function(){
	window.open('http://don6l.github.io/web');
};

var freq = function(){
	console.log('Freq');
	window.open('https://jackgllghr.itch.io/freq');
};


var evac = function(){
	console.log('evac');
	window.open('https://don6l.itch.io/evac');
};

var tow = function(){
	console.log('TOW');
	window.open('http://don6l.github.io/TugOfWar');
};

var pixelBuster = function(){
	console.log('pixelBuster');
	window.open('https://don6l.itch.io/pixel-busters-game-jam');
};