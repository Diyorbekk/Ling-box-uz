// scrollTrigger.js

(function($) {

  $.fn.scrollTrigger = function(options) {

    var settings = $.extend({
          offset: 10,
          target: this
        }, options),
        el = this;


    var activate = function() {

      el.each(function(k, v) {
        var sT = $(window).scrollTop(),
            wH = $(window).height();

        if(settings.target != el) {
          if(sT > $(el[0]).offset().top - wH + settings.offset) {
            $(settings.target).addClass('animationText');
          }
        } else {
          if(sT > $(v).offset().top - wH + settings.offset) {
            $(v).addClass('animationText');
          }
        }

      });

    };

    var didScroll = false;
    $(window).scroll(function() {
      didScroll = true;
    });
    setInterval(function() {
      if(didScroll) {
        activate();
        didScroll = false;
      }
    }, 250);

  };

}(jQuery));