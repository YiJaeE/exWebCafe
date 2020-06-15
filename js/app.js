// variable
const $menu = document.querySelector('.menu');
const $items = $menu.querySelectorAll('.menu-item');
const $subList = $menu.querySelector('.submenu li');
const $icons = $menu.querySelectorAll('.submenu a');

// Main Menu

// class remove func
const removeClass = () => {
  [...$items].map(removeClass => {
    removeClass.classList.remove('menu-act');
  });
};

// click event
$menu.addEventListener('click', ({ target }) => {
  const $clickChange = target.parentNode;
  removeClass();
  if ($subList === $clickChange) return;
  $clickChange.classList.add('menu-act');
});

// mouseover event
[...$items].map(hoverItem => {
  hoverItem.addEventListener('mouseover', ({ target }) => {
    const $hoverChange = target.parentNode;
    if ($hoverChange.matches('.menu-item')) removeClass();
    hoverItem.classList.add('menu-act');
  });
});

// focus event
[...$items].map(focusItem => {
  focusItem.addEventListener('focusin', ({ target }) => {
    const $focusMenu = target;
    const $nowFocus = document.activeElement;
    if ($nowFocus === focusItem) removeClass();
    else if ($focusMenu.matches('.submenu a')) return;
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
