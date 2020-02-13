// variable
const $nav = document.querySelector('.navigation');
const $menu = $nav.querySelector('.menu');
const $various = $menu.children;
const $menuList = $menu.querySelector('.menu li');
const $items = $menu.querySelectorAll('.menu-item');
const $item = $menu.querySelector('.menu-item');
const $subList = $item.querySelector('.submenu li');
const $icons = $menu.querySelectorAll('.submenu a');
const $icon = $item.querySelector('.submenu a');

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
    const $nowFocus = $menuList.childNodes;
    console.log($nowFocus);
    // $nowFocus에 .menu-act를 추가하는데 서브메뉴에 있을 때는 .menu-act를 살리고 메인메뉴에 있을 때는 .menu-act를 죽임
    
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
