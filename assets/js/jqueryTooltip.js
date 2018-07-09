(function($){
    $.fn.jqueryToolTip = function(toolTipOptions){
      let toolTipDefaults = {
        position: bottom
      };
      let toolTipSettings = $.extend({}, toolTipDefaults, toolTipOptions);
      let toolTipTemplate = '<div id="jqueryToolTip_wrapper"><span class="jqueryToolTip_text"></span><span class="jqueryToolTip_arrow"></span></div><!-- end jqueryToolTip -->';
      $('body').append(toolTipTemplate);
      $(this).each(function(){
        $(this).hover(function(){
          let toolTipTitle = $(this).attr("title");
          let toTop = $(this).offset().top;
          let toLeft = $(this).offset().left;
          let toolTipHeight = $('#jqueryToolTip_wrapper').css("height");
          let itemHeight = $(this).css("height");
          
          if(toolTipSettings.position == 'top'){
              $('#jqueryToolTip_wrapper').find('.jqueryToolTip_arrow').addClass('arrow_down');
              let topFinal = parseInt(toTop) - parseInt(toolTipHeight) - 10;
          } else {
              let topFinal = parseint(toTop) + parseInt(itemHeight) + 10;
              $('#jqueryToolTip_wrapper').find('.jqueryToolTip_arrow').removeClass('arrow_down');
          }
          
          $('.jqueryToolTip_text').html(toolTipTitle);
          $('#jqueryToolTip_wrapper').css("display","block");
          $('#jqueryToolTip_wrapper').css({
            top: topFinal,
            left: toLeft
          });
          
        },function(){
          $('#jqueryToolTip_wrapper').css("display","none");
        });
      });
    }
  })(jQuery);