$(document).ready(function(){
	$('.gnb>ul ul').hide();
	$('.main-visual').bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
	});
	$('#header .gnb-down').fadeOut();
	
	$('.gnb>ul').hover(function(){
		$('.gnb>ul ul').show();
		$(this).removeClass('on');
		$(this).addClass('on');
		$('#header .gnb-down').fadeIn(300)
	}, function(){
		$('.gnb>ul ul').hide();
		$(this).removeClass('on');
		$('#header .gnb-down').fadeOut(350)
	});
		/*
	$('.gnb ul>li a').focus(function(){
		$('.gnb>ul').removeClass('on');
		$('.gnb>ul').addClass('on');
		$('#header .gnb-down').fadeIn(300)
	}, function(){
		$('.gnb>ul').removeClass('on');
		$('#header .gnb-down').fadeOut(350)
	});
		*/
	$('.ct2Btn').click(function(){
		var $i =$(this).parent();
		var $ii = $(this).parent().parent().children('.content-2-txt-wrap1');
		$i.toggleClass('on');
		$(this).toggleClass('on');
		$ii.fadeToggle(800);
	});
});