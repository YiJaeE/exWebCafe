var menu = $('menu');
var items = $('.menu-item');
var icons = $('.submenu a');

icons.attr('class', 'icon-dot-circled');

icons.on('mouseover focusin', function(){
  $(this).removeClass('icon-dot-circled');
  $(this).addClass('icon-ok');
});

icons.on('mouseout focusout', function(){
  $(this).removeClass('icon-ok');
  $(this).addClass('icon-dot-circled');
});

items.on('click keyup focus mouseover', function(e){
  if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus' || e.type === 'mouseover') {
    items.removeClass('menu-act');
    $(this).addClass('menu-act');
  }
});