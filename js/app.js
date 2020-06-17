// variable
const $menu = document.querySelector('.menu');
const $icons = $menu.querySelectorAll('.submenu a');
const $board = document.querySelector('.board');

// remove class function => main menu & tab menu
const removeAllClass = position => {
  const action = position === 'menu' ? $menu.children : $board.children;
  [...action].map(removeAction => {
    removeAction.classList.remove(`${position}-act`);
  });
};

// main menu event function => click & mouseover & focus
const mainMenuEvent = ({ type, target }) => {
  const $target = type === 'focusin' ? target : target.parentNode;
  if ($target.matches('.menu-item')) {
    removeAllClass('menu');
  } else return;
  $target.classList.add('menu-act');
};

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
    removeAllClass('board');
  }
  $panel.classList.add('board-act');
};

// event Handler
// main menu
$menu.addEventListener('click', mainMenuEvent);
$menu.addEventListener('mouseover', mainMenuEvent);
$menu.addEventListener('focusin', mainMenuEvent);
// sub menu
$menu.addEventListener('mouseover', subMenuChangeIcon.activeEvent);
$menu.addEventListener('mouseout', subMenuChangeIcon.inactiveEvent);
$menu.addEventListener('focusin', subMenuChangeIcon.activeEvent);
$menu.addEventListener('focusout', subMenuChangeIcon.inactiveEvent);
// tab menu
$board.addEventListener('click', tabActiveEvent);
