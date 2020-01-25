const $menu = document.querySelector('.menu');
const $items = document.querySelector('.menu-item');
const $button = document.querySelector('.menu-button');
const $icons = document.querySelectorAll('.submenu a');
const $various = $menu.children;

// console.log($items);
// console.log($icons);
// console.log($various);


// 클릭 이벤트
$menu.addEventListener('click', function (e) {
  const $clickEvent = e.target.parentNode;
  ([...$various].map((click) => {
    click.classList.remove('menu-act');
  }));
  $clickEvent.classList.add('menu-act');
});

// focus 이벤트
$menu.addEventListener('focusin', function (e) {
  const $clickEvent = e.target;
});

// 호버 이벤트
// 문제: 호버 이벤트가 아무 데나 먹는다 -_-...
// $menu.addEventListener('mouseover', function (e) {
//   const $enterevent = e.target.parentNode;
//   console.log($enterevent);
//   if ($enterevent.classList.contains('menu-act')) {
//     $enterevent.classList.add('menu-act');    
//   }
  
// });

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
