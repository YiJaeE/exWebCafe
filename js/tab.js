// var panels = $('.board section');
// var tabs = $('.tab a');

// tabs.click(function(e){
//   e.preventDefault();
//   panels.removeClass('board-act');
//   $(this).parent().parent().addClass('board-act');
// });

// aria version
var tabs = $('.tab-list [role="tab"]');

tabs.on('click', function(e){
  e.preventDefault();
  $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
  var selectedId = "#"+$(this).attr('aria-controls');
		$(selectedId).addClass('section-act').siblings().removeClass('section-act');
})