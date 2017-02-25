/*--gotop--*/
$.gotoTop = function(node){
		var $node = $(node);
		$(window).on('scroll',function(e){
			e.preventDefault();
			var offsetY = $(this).scrollTop();
			var viewpointHeight = document.documentElement.clientHeight
			if (offsetY >= viewpointHeight) {
				$node.addClass('visible');
			}else{
				$node.removeClass('visible');
			}
		})
		$node.on('click',function(){
			$('body').animate({scrollTop: 0},'slow');
		});
}
/*--fullPage--*/
var isAnimate = false;
$.fullPage = function(node){
	var $node = $(node);
	isAnimate = false;
	$node.on('wheel',function(e){
		var deltaY = e.originalEvent.deltaY;
		var viewpointHeight = document.documentElement.clientHeight;
		if (!isAnimate) {
			isAnimate = true;
			var operation = deltaY > 0? '+=' : '-=';
			$('body,html').stop(true,true).animate({
				scrollTop: operation + viewpointHeight
			}, 500, function(){
				isAnimate = false;
			});
		}
	});
}

$.gotoTop(('.topbtn'));
$.fullPage($('#projects'));