$(document).ready(function(){
	var $current=0;
	//var $noticeeq = eval($current-1);
	var $prev= $('.left.png');
	var $next= $('.right.png');

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
		$('#header .gnb-down').stop().fadeIn(300)
	}, function(){
		$('.gnb>ul ul').hide();
		$(this).removeClass('on');
		$('#header .gnb-down').stop().fadeOut(350)
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
	/*
	$('.content-1>ul>li').hover(function(){
		var $teq = $(this).index();
		var $burl = 'url(images/main/c1-'+eval($teq+1)+'h.png)';
		var $bburl = 'url(images/main/c1-'+eval($teq+1)+'.png)';
		$(this).css('background',$burl);
	},function(){
		$(this).css('background',$bburl);
	});
	*/
	$('.ct2Btn').click(function(){
		var $i =$(this).parent();
		var $ii = $(this).parent().parent().children('.content-2-txt-wrap1');
		$i.toggleClass('on');
		$(this).toggleClass('on');
		$ii.fadeToggle(800);
	});
	
	$('.content-3-gallery > ul > li').hide();
	$('.content-3-gallery > ul > li').eq(0).show();
	$('.thumbnail>ul>li').on('click',function(){
		$('.content-3-gallery > ul > li').hide();
		var $i = $(this).index();
		$current=$i;
		$('.content-3-gallery > ul > li').eq($i).show();
		$('.thumbnail>ul>li').removeClass('on');
		$(this).addClass('on');
	});
	$('.content-3-gallery .left').on('click',function(){
		if($current>0){
			$current--;
		} else {
			$current=7;
		}
		//$('.notice-inner-wrap>p>img').attr('src','images/main/event-'+$current+'.jpg')
		$('.content-3-gallery>ul>li').hide();
		$('.content-3-gallery>ul>li').eq($current).show();
		$('.thumbnail>ul>li').removeClass('on');
		$('.thumbnail>ul>li').eq($current).addClass('on');
	});
	$('.content-3-gallery .right').on('click',function(){
		if($current<7){
			$current++;
		} else {
			$current=0;
		}
		//$('.notice-inner-wrap>p>img').attr('src','images/main/event-'+$current+'.jpg')
		$('.content-3-gallery>ul>li').hide();
		$('.content-3-gallery>ul>li').eq($current).show();
		$('.thumbnail>ul>li').removeClass('on');
		$('.thumbnail>ul>li').eq($current).addClass('on');
	});
/*	
	*/
});