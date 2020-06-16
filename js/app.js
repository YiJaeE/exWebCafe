// variable
const $menu = document.querySelector('.menu');
const $icons = $menu.querySelectorAll('.submenu a');
const $board = document.querySelector('.board');

// class remove common function
const removeAllClass = (() => {
  return {
    menu() {
      [...$menu.children].map(removeMainActive => {
        removeMainActive.classList.remove('menu-act');
      });
    },
    board() {
      [...$board.children].map(removeTabActive => {
        removeTabActive.classList.remove('board-act');
      });
    },
  };
})();

// Main Menu
// main menu evet function
const mainMenuEvent = (() => {
  return {
    clickHover({ target }) {
      const $menuChange = target.parentNode;
      if (!target.matches('.menu-button')) return;
      else if ($menuChange.matches('.menu-item')) removeAllClass.menu();
      $menuChange.classList.add('menu-act');
    },
    focus({ target }) {
      const $focusMenu = target;
      const $nowFocus = document.activeElement;
      if (!$nowFocus.matches('.submenu a' || 'menu-item')) {
        removeAllClass.menu();
      } else if ($nowFocus.matches('.submenu a')) return;
      $focusMenu.classList.add('menu-act');
    },
  };
})();

// Sub Menu
// basic icon
[...$icons].map(basicIcon => {
  basicIcon.classList.add('icon-dot-circled');
});

// change icon common function
const subMenuChangeIcon = (() => {
  return {
    active({ target }) {
      target.classList.replace('icon-dot-circled', 'icon-ok');
    },
    inactive() {
      [...$icons].map(icon => icon.classList.replace('icon-ok', 'icon-dot-circled'));
    },
  };
})();

// Tab Menu
const tabActive = e => {
  e.preventDefault();
  if (e.target.matches('.board > section > h2 > a')) {
    removeAllClass.board();
    const $panel = e.target.parentNode.parentNode;
    $panel.classList.add('board-act');
  }
};

// event handler
// main menu
$menu.addEventListener('click', mainMenuEvent.clickHover);
$menu.addEventListener('mouseover', mainMenuEvent.clickHover);
$menu.addEventListener('focusin', mainMenuEvent.focus);
// sub menu
$menu.addEventListener('mouseover', subMenuChangeIcon.active);
$menu.addEventListener('mouseout', subMenuChangeIcon.inactive);
$menu.addEventListener('focusin', subMenuChangeIcon.active);
$menu.addEventListener('focusout', subMenuChangeIcon.inactive);
// tab menu
$board.addEventListener('click', tabActive);
