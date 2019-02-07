$(document).ready(function(){

	$('.event h3').click(function(){
		$('.event').removeClass('on');
		$(this).parent().addClass('on');
	});
});