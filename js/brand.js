$(document).ready(function(){
	var $brandName1='SEVEN SPRINGS';
	var $brandName2='SEVEN SPRINGS BLACK';
	var $brandName3='CAFE SEVEN SPRINGS';
	var $brandName4='CAFE PARK 7';
	$('.sidenav-wrap ul li').click(function(){
		$tN = $(this).index();
		$tNnext = $tN+1;
		$('.brand-wrap h2').html(eval('$brandName'+$tNnext));
		$('.brand-wrap').css({'background':'url(./images/main/seven_menu'+$tNnext+'.jpg) center top fixed no-repeat'});
		$('.container-wrap').css({'background':'url(./images/main/seven_menu'+$tNnext+'_bg.jpg)'});
		$('.brand-inner').hide();
		$('.brand-inner').eq($tN).show();
	});
});