// variable
const $menu = document.querySelector('.menu');
const $icons = $menu.querySelectorAll('.submenu a');
const $board = document.querySelector('.board');

// remove class function => main menu & tab menu
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

// main menu event function => click & mouseover & focus
const mainMenuEvent = (() => {
  return {
    mouseEvent({ target }) {
      const $menuChange = target.parentNode;
      if ($menuChange.matches('.menu-item')) {
        removeAllClass.menu();
      } else return;
      $menuChange.classList.add('menu-act');
    },
    focusEvent({ target }) {
      const $focusMenu = target;
      const $nowFocus = document.activeElement;
      if (!$nowFocus.matches('.submenu a' || 'menu-item')) {
        removeAllClass.menu();
      }
      $focusMenu.classList.add('menu-act');
    },
  };
})();

// sub menu insert basic icon
[...$icons].map(basicIcon => basicIcon.setAttribute('class', 'icon-dot-circled'));

// sub menu change icon event function => mouseover & focus
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

// tab menu event function => click
const tabActiveEvent = e => {
  e.preventDefault();
  const $panel = e.target.parentNode.parentNode;
  if (e.target.matches('.board > section > h2 > a')) {
    removeAllClass.board();
  }
  $panel.classList.add('board-act');
};

// event Handler
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
