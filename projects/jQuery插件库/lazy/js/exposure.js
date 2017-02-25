/**
 * 
 * @authors  ()
 * @date    2016-10-26
 * @version $Id$
 */
function Exposure($imgs){
  this.$ct = $(window);
  this.$target = $imgs;
  this.bind();
}
Exposure.prototype = {
  bind: function(){
    var self = this;
    var timer = null;
    var interval = 100;
    self.checkShow();
    this.$ct.on('scroll',function(){
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(function(){
        self.checkShow();
      },interval);
    });
  },
  checkShow: function(){
    var self = this;
    self.$target.each(function(){
      var $current = $(this);
      if ($current.attr('isLoaded')) {return}
      if (self.isVisible($current)) {
        self.showImg($current);
      }
    });
  },
  isVisible: function($node){
    var scrollHeight = $(window).scrollTop();
    var offsetHeight = $node.offset().top;
    var windowHeight = $(window).height();
    if (scrollHeight + windowHeight > offsetHeight) {
      return true;
    }else{
      return false;
    }
  },
  showImg: function($node){
    $node.attr('src',$node.attr('data-src'));
    $node.attr('isLoaded',true);
  }
}
// 调用
//var s = new Exposure($('.container img'));
