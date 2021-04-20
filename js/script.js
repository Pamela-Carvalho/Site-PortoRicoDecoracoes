$(function(){

	var mar = $('.interativo');

	$(window).scroll(function(){

		if($(this).scrollTop() > 34){

			mar.addClass("margin");

		}
		else{

			mar.removeClass("margin");

		}

	});

});

$(function(){

	var nav = $('.header');

	$(window).scroll(function(){

		if($(this).scrollTop() > 34){

			nav.addClass("menu-fixo");

		}
		else{

			nav.removeClass("menu-fixo");

		}

	});

});

$(function(){

	var info = $('.barra');

	$(window).scroll(function(){

		if($(this).scrollTop() > 34){

			info.addClass("sumir");

		}
		else{

			info.removeClass("sumir");

		}

	});

});