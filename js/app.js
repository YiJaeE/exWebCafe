// variable
const $menu = document.querySelector('.menu');
const $various = $menu.children;
const $menuList = document.querySelector('.menu li');
const $item = document.querySelectorAll('.menu-item');
const $subList = document.querySelector('.submenu li');
const $icons = document.querySelectorAll('.submenu a');
const $icon = document.querySelector('.submenu a');

// console.log($various);
// console.log($menuList);
// console.log($item);


// Main Menu
// click 이벤트
$menu.addEventListener('click', function (e) {
  const $clickChange = e.target.parentNode;
  [...$various].map((removeClick) => {
    removeClick.classList.remove('menu-act');
  });
  if ($subList === $clickChange) return;
  $clickChange.classList.add('menu-act');
});

// focus 이벤트
[...$item].map((item) => {
  item.addEventListener('focusin', function (e) {
    const $focusMenu = e.target;
    const $click = document.activeElement;
    if ($click === item) {
      [...$various].map((removeClick) => {
        removeClick.classList.remove('menu-act');
      });
    } else if ($icon === $focusMenu) return;
    $focusMenu.classList.add('menu-act');
    });
  });

  
// Sub Menu
// 기본 아이콘 추가
[...$icons].map((basicIcon) => {
  basicIcon.classList.add('icon-dot-circled');
});

// hover시 아이콘 변경
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

// focus시 아이콘 변경
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




// [...$item].map((item) => {
//   item.addEventListener('mouseenter', function (e) {
//     const $focusMenu = e.target;
//     const $click = document.activeElement;
//     console.log($click);
//     // if ($click === item) {
//     //   [...$various].map((removeClick) => {
//     //     removeClick.classList.remove('menu-act');
//     //   });
//     // };
//     if ($icon === $focusMenu) return;
//     $focusMenu.classList.add('menu-act');
//     });
//   });


// focus 이벤트
// .menu-item에 .menu-act가 추가되도록

// 클릭 이벤트
// $menu.addEventListener('click', function (e) {
//   const $clickEvent = e.target.parentNode;
//   ([...$various].map((click) => {
//     click.classList.remove('menu-act');    
//   }));
//   if ($clickEvent.classList.contains('menu')) {
//     $item.classList.add('menu-act');
//   } else if ($clickEvent.classList.contains('navigation')) {
//     $item.classList.add('menu-act');
//   } else
//   $clickEvent.classList.add('menu-act');
//   console.log($clickEvent);
// });