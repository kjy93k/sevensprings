$(document).ready(function(){
	var $current=0;
	//var $noticeeq = eval($current-1);
	var $prev= $('.left.png');
	var $next= $('.right.png');

	$('.gnb>ul ul').hide();

	
	$('.gnb>ul').hover(function(){
		$('.gnb>ul ul').fadeIn(700);//show();
		$(this).removeClass('on');
		$(this).addClass('on');
		$('#header .gnb-down').stop().slideDown(); //fadeIn(300);
	}, function(){
		$('.gnb>ul ul').fadeOut();//.hide();
		$(this).removeClass('on');
		$('#header .gnb-down').stop().slideUp(); //fadeOut(350);
	});

	$('.gnb>ul>li>ul').hover(function(){
		$(this).parent().css('color','#d9442b');
		$(this).css('color','#000');
	},function(){
		$('.gnb>ul>li').css('color','#000');

	});

	var $btnNum=0;

	$('.sidenav-wrap h2').click(function(){
		if ($btnNum==0) {
			$('.sidenav-wrap h2 span').addClass('on');
			$('.sidenav-wrap ul').slideDown();
			$btnNum=1;
		} else {
			$('.sidenav-wrap h2 span').removeClass('on');
			$('.sidenav-wrap ul').slideUp();
			$btnNum=0;
		}
	});


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