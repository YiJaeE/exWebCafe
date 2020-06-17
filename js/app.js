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
    mouseEvent({ target }) {
      const $menuChange = target.parentNode;
      if (!target.matches('.menu-button')) return;
      else if ($menuChange.matches('.menu-item')) removeAllClass.menu();
      $menuChange.classList.add('menu-act');
    },
    focusEvent({ target }) {
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
[...$icons].map(basicIcon => basicIcon.setAttribute('class', 'icon-dot-circled'));

// change icon common function
const subMenuChangeIcon = (() => {
  return {
    activeEvent({ target }) {
      target.classList.replace('icon-dot-circled', 'icon-ok');
    },
    inactiveEvent({ target }) {
      target.classList.replace('icon-ok', 'icon-dot-circled');
    },
  };
})();

// Tab Menu
// tab menu event function
const tabActiveEvent = e => {
  e.preventDefault();
  if (e.target.matches('.board > section > h2 > a')) {
    removeAllClass.board();
    const $panel = e.target.parentNode.parentNode;
    $panel.classList.add('board-act');
  }
};

// Event Handler
// main menu
$menu.addEventListener('click', mainMenuEvent.mouseEvent);
$menu.addEventListener('mouseover', mainMenuEvent.mouseEvent);
$menu.addEventListener('focusin', mainMenuEvent.focusEvent);
// sub menu
$menu.addEventListener('mouseover', subMenuChangeIcon.activeEvent);
$menu.addEventListener('mouseout', subMenuChangeIcon.inactiveEvent);
$menu.addEventListener('focusin', subMenuChangeIcon.activeEvent);
$menu.addEventListener('focusout', subMenuChangeIcon.inactiveEvent);
// tab menu
$board.addEventListener('click', tabActiveEvent);
