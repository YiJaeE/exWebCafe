// variable
const $menu = document.querySelector('.menu');
const $various = $menu.children;
const $items = $menu.querySelectorAll('.menu-item');
const $subList = $menu.querySelector('.submenu li');
const $icons = $menu.querySelectorAll('.submenu a');
const $icon = $menu.querySelector('.submenu a');

// Main Menu
// click event
$menu.addEventListener('click', ({ target }) => {
  const $clickChange = target.parentNode;
  [...$various].map(removeClass => {
    removeClass.classList.remove('menu-act');
  });
  if ($subList === $clickChange) return;
  $clickChange.classList.add('menu-act');
});

// mouseover event
[...$various].map(hover => {
  hover.addEventListener('mouseover', ({ target }) => {
    const $hoverChange = target.parentNode;
    if ($hoverChange.matches('.menu-item')) {
      [...$various].map(removeClass => {
        removeClass.classList.remove('menu-act');
      });
    }
    hover.classList.add('menu-act');
  });
});

// focus event
[...$items].map(item => {
  item.addEventListener('focusin', ({ target }) => {
    const $focusMenu = target;
    const $nowFocus = document.activeElement;
    if ($nowFocus === item) {
      [...$various].map(removeClass => {
        removeClass.classList.remove('menu-act');
      });
    } else if ($icon === $focusMenu) return;
    $focusMenu.classList.add('menu-act');
  });
});

// Sub Menu
// basic icon
[...$icons].map(basicIcon => {
  basicIcon.classList.add('icon-dot-circled');
});

// icon change on mouseover event
[...$icons].map(changeIcon => {
  changeIcon.addEventListener('mouseover', ({ target }) => {
    const $hoverIcon = target;
    $hoverIcon.classList.replace('icon-dot-circled', 'icon-ok');
  });
  changeIcon.addEventListener('mouseout', ({ target }) => {
    const $hoverOutIcon = target;
    $hoverOutIcon.classList.replace('icon-ok', 'icon-dot-circled');
  });
});

// icon change on focus event
[...$icons].map(changeIcon => {
  changeIcon.addEventListener('focusin', ({ target }) => {
    const $focusIcon = target;
    $focusIcon.classList.replace('icon-dot-circled', 'icon-ok');
  });
  changeIcon.addEventListener('focusout', ({ target }) => {
    const $focusOutIcon = target;
    $focusOutIcon.classList.replace('icon-ok', 'icon-dot-circled');
  });
});
