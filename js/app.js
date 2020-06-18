// variable
const menu = document.querySelector('.menu');
const icons = menu.querySelectorAll('.submenu a');
const board = document.querySelector('.board');

// change class function => main menu & tab menu
const changeActClass = target => {
  const condition = target.tagName === 'LI';
  const removeTargets = condition ? menu.children : board.children;
  const addActiveClass = condition ? 'menu-act' : 'board-act';
  [...removeTargets].map(removeTarget => {
    removeTarget.classList.remove(`${addActiveClass}`);
  });
  target.classList.add(`${addActiveClass}`);
};

// main menu event function => click & mouseover & focusin
const mainMenuEvent = ({ type, target }) => {
  const eventTarget = type === 'focusin' ? target : target.parentNode;
  if (eventTarget.matches('.menu-item')) {
    changeActClass(eventTarget);
  }
};

// sub menu insert basic icon
[...icons].map(basicIcon => basicIcon.setAttribute('class', 'icon-dot-circled'));

// sub menu change icon event function => mouseover & focusin
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
const tabMenuEvent = e => {
  e.preventDefault();
  const panel = e.target.parentNode.parentNode;
  changeActClass(panel);
};

// event Handler
// main menu
menu.addEventListener('click', mainMenuEvent);
menu.addEventListener('mouseover', mainMenuEvent);
menu.addEventListener('focusin', mainMenuEvent);
// sub menu
menu.addEventListener('mouseover', subMenuChangeIcon.activeEvent);
menu.addEventListener('mouseout', subMenuChangeIcon.inactiveEvent);
menu.addEventListener('focusin', subMenuChangeIcon.activeEvent);
menu.addEventListener('focusout', subMenuChangeIcon.inactiveEvent);
// tab menu
board.addEventListener('click', tabMenuEvent);
