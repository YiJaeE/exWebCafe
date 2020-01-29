var panels = $('.board section');
var tabs = $('.tab a');

tabs.click(function(e){
  e.preventDefault();
  panels.removeClass('board-act');
  $(this).parent().parent().addClass('board-act');
});