// variable
const $menu = document.querySelector('.menu');
const $icons = $menu.querySelectorAll('.submenu a');
const $board = document.querySelector('.board');

// Main Menu
// class remove common function
const removeClass = (() => {
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

// main menu evet function
const mainMenuEvent = (() => {
  return {
    click({ target }) {
      const $clickChange = target.parentNode;
      removeClass.menu();
      if (!target.matches('.menu-button')) return;
      $clickChange.classList.add('menu-act');
    },
    mouseover({ target }) {
      const $hoverChange = target.parentNode;
      if (!target.matches('.menu-button' || '.menu-item')) return;
      else if ($hoverChange.matches('.menu-item')) removeClass.menu();
      $hoverChange.classList.add('menu-act');
    },
    focusin({ target }) {
      const $focusMenu = target;
      const $nowFocus = document.activeElement;
      if (!$nowFocus.matches('.submenu a' || 'menu-item')) {
        removeClass.menu();
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
const tabActive = (e => {
  e.preventDefault();
  if (e.target.matches('.board > section > h2 > a')) {
    removeClass.board();
    const $panel = e.target.parentNode.parentNode;
    $panel.classList.add('board-act');
  }
})();

// event handler
// main menu
$menu.addEventListener('click', mainMenuEvent.click);
$menu.addEventListener('mouseover', mainMenuEvent.mouseover);
$menu.addEventListener('focusin', mainMenuEvent.focusin);
// sub menu
$menu.addEventListener('mouseover', subMenuChangeIcon.active);
$menu.addEventListener('mouseout', subMenuChangeIcon.inactive);
$menu.addEventListener('focusin', subMenuChangeIcon.active);
$menu.addEventListener('focusout', subMenuChangeIcon.inactive);
// tab menu
$board.addEventListener('click', tabActive);
