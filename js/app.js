const $menu = document.querySelector('.menu');
const $items = document.querySelector('.menu-item');
const $button = document.querySelector('.menu-button');
const $icons = document.querySelectorAll('.submenu a');
const $various = $menu.children;

console.log($items);
console.log($icons);
console.log($various);

// 기본 아이콘 추가
[...$icons].map((item) => {
  item.classList.add('icon-dot-circled');
});

// 클릭 이벤트
$menu.addEventListener('click', function (e) {
  const $clickEvent = e.target.parentNode;
  ([...$various].map((item) => {
    item.classList.remove('menu-act');
  }));
  $clickEvent.classList.add('menu-act');
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
