// variable
const $nav = document.querySelector('.navigation');
let $menu = document.querySelector('.menu');
let $various = $menu.children;
let $menuList = document.querySelector('.menu li');
let $items = document.querySelectorAll('.menu-item');
let $item = document.querySelector('.menu-item');
let $subList = document.querySelector('.submenu li');
let $icons = document.querySelectorAll('.submenu a');
let $icon = document.querySelector('.submenu a');

// console.log($menu);
// console.log($menuList);
// console.log($item);


// Main Menu
// click
$menu.addEventListener('click', function (e) {
  const $clickChange = e.target.parentNode;
  [...$various].map((removeClass) => {
    removeClass.classList.remove('menu-act');
  });
  if ($subList === $clickChange) return;
  $clickChange.classList.add('menu-act');
});

// mouseover
// 네비게이션에 menu-act 가 들어가는 문제
// submenu로 내려갈 수 있으면서 item에 메뉴가 여러 개 선택되지 않도록
$menu.addEventListener('mouseover', function (e) {
  const $hoverChange = e.target.parentNode;
  [...$items].map((item) => {
    // const $nowFocus = document.activeElement.childNodes;
    // console.log($nowFocus);
    
    // console.log(item);   
    // item.classList.remove('menu-act');
    // console.log(item);
  });
  if ($hoverChange === $menu) {
    $menu.classList.remove('menu-act');
  } else $hoverChange.classList.add('menu-act');
  // console.log($various);
});

// [...$various].map((hover) => {    
//   hover.addEventListener('mouseover', function (e) {
//     const $clickChange = e.target.parentNode;
//     if ($clickChange === $menu) {
//       $menu.classList.remove('menu-act');
//     } else $clickChange.classList.add('menu-act');
//   });
// });

// focus
[...$items].map((item) => {
  item.addEventListener('focusin', function (e) {
    const $focusMenu = e.target;
    const $nowFocus = document.activeElement;
    if ($nowFocus === item) {
      [...$various].map((removeClass) => {
        removeClass.classList.remove('menu-act');
      });
    } else if ($icon === $focusMenu) return;
    $focusMenu.classList.add('menu-act');
  });
});


// Sub Menu
// basic icon
[...$icons].map((basicIcon) => {
  basicIcon.classList.add('icon-dot-circled');
});

// icon change on mouseover
[...$icons].map((changeIcon) => {
  changeIcon.addEventListener('mouseover', function (e) {
    const $hoverIcon = e.target;
    $hoverIcon.classList.replace('icon-dot-circled', 'icon-ok');
  });
  changeIcon.addEventListener('mouseout', function (e) {
    const $hoverOutIcon = e.target;
    $hoverOutIcon.classList.replace('icon-ok', 'icon-dot-circled');
  });
});

// icon change on focus
[...$icons].map((changeIcon) => {
  changeIcon.addEventListener('focusin', function (e) {
    const $focusIcon = e.target;
    $focusIcon.classList.replace('icon-dot-circled', 'icon-ok');
  });
  changeIcon.addEventListener('focusout', function (e) {
    const $focusOutIcon = e.target;
    $focusOutIcon.classList.replace('icon-ok', 'icon-dot-circled');
  });
});
