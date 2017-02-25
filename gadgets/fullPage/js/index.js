!function(){
	$.gotoTop = function(node){
		var $node = $(node);
		$(window).on('scroll',function(e){
			e.preventDefault();
			var offsetY = $(this).scrollTop();
			var viewpointHeight = document.documentElement.clientHeight;
			if (offsetY >= viewpointHeight) {
				$node.addClass('visible');
			}else{
				$node.removeClass('visible');
			}
		});
		$node.on('click',function(){
			$('body').animate({scrollTop: 0},'slow');
		});
	}
	$.gotoTop(('.topbtn'));

	/*事件代理*/
	$('#projects').on('click',function(e){
		var $target = $(e.target);
		var viewpointHeight = document.documentElement.clientHeight;
		if ($target.hasClass('down')) {
			$('html,body').stop(true,true).animate({
				scrollTop: '+=' + viewpointHeight
			});
		}
		if ($target.hasClass('up')) {
			$('html,body').stop(true,true).animate({
				scrollTop: '-=' + viewpointHeight
			});
		}
	});
}();