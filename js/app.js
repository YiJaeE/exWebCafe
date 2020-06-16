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

// main menu evet closure
const menuEvent = (() => {
  return {
    click(target) {
      const $clickChange = target.parentNode;
      removeClass();
      if (!target.matches('.menu-button')) return;
      $clickChange.classList.add('menu-act');
    },
    mouseover(target) {
      const $hoverChange = target.parentNode;
      if (!target.matches('.menu-button' || '.menu-item')) return;
      else if ($hoverChange.matches('.menu-item')) removeClass();
      $hoverChange.classList.add('menu-act');
    },
    focusin(target) {
      const $focusMenu = target;
      const $nowFocus = document.activeElement;
      if (!$nowFocus.matches('.submenu a' || 'menu-item')) {
        removeClass();
      } else if ($nowFocus.matches('.submenu a')) return;
      $focusMenu.classList.add('menu-act');
    },
  };
})();

// click || mouseover || focusin event
$menu.addEventListener('click', ({ target }) => menuEvent.click(target));
$menu.addEventListener('mouseover', ({ target }) => menuEvent.mouseover(target));
$menu.addEventListener('focusin', ({ target }) => menuEvent.focusin(target));

// Sub Menu
// basic icon
[...$icons].map(basicIcon => {
  basicIcon.classList.add('icon-dot-circled');
});

const changeIcon = (() => {
  return {
    active(icon) {
      icon.classList.replace('icon-dot-circled', 'icon-ok');
    },
    inactive(icon) {
      icon.classList.replace('icon-ok', 'icon-dot-circled');
    },
  };
})();

$menu.addEventListener('mouseover', ({ target }) => changeIcon.active(target));
$menu.addEventListener('mouseout', () => {
  [...$icons].map(icon => changeIcon.inactive(icon));
});
$menu.addEventListener('focusin', ({ target }) => changeIcon.active(target));
$menu.addEventListener('focusout', () => {
  [...$icons].map(icon => changeIcon.inactive(icon));
});

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
