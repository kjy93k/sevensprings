$(document).ready(function(){

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

	$('.sidenav-wrap').mouseover(function(){
		$(this).css({'left':'2%'})
	});
	$('.sidenav-wrap').mouseleave(function(){
		$(this).css({'left':'-4%'});
		$('.sidenav-wrap h2 span').removeClass('on');
		$('.sidenav-wrap ul').slideUp();
		$btnNum=0;
	});
});