// variable
const $menu = document.querySelector('.menu');
const $icons = $menu.querySelectorAll('.submenu a');
const $board = document.querySelector('.board');

// Main Menu
// class remove common function
const removeClass = () => {
  [...$menu.children].map(removeClass => {
    removeClass.classList.remove('menu-act');
  });
};

// click event
$menu.addEventListener('click', ({ target }) => {
  const $clickChange = target.parentNode;
  removeClass();
  if (!target.matches('.menu-button')) return;
  $clickChange.classList.add('menu-act');
});

// mouseover event
$menu.addEventListener('mouseover', ({ target }) => {
  const $hoverChange = target.parentNode;
  if (!target.matches('.menu-button' || '.menu-item')) return;
  else if ($hoverChange.matches('.menu-item')) removeClass();
  $hoverChange.classList.add('menu-act');
});

// focus event
$menu.addEventListener('focusin', ({ target }) => {
  const $focusMenu = target;
  const $nowFocus = document.activeElement;
  if (!$nowFocus.matches('.submenu a' || 'menu-item')) {
    removeClass();
  } else if ($nowFocus.matches('.submenu a')) return;
  $focusMenu.classList.add('menu-act');
});

// Sub Menu
// basic icon
[...$icons].map(basicIcon => {
  basicIcon.classList.add('icon-dot-circled');
});

// icon change common function
const changeIcon = ({ target }) => {
  if (target.matches('.submenu > li > a')) {
    [...$icons].map(icon => {
      icon.classList.replace('icon-ok', 'icon-dot-circled');
    });
  }
  target.classList.replace('icon-dot-circled', 'icon-ok');
};

// mouseover || focus event
$menu.addEventListener('mouseover', changeIcon);
$menu.addEventListener('focusin', changeIcon);

// Tab Menu
$board.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.matches('.board > section > h2 > a')) {
    [...$board.children].map(removeTab => {
      removeTab.classList.remove('board-act');
    });
    const $panel = e.target.parentNode.parentNode;
    $panel.classList.add('board-act');
  }
});
