const $menu = document.querySelector('.menu');
const $items = document.querySelector('.menu-item');
const $button = document.querySelector('.menu-button');
const $icons = document.querySelector('.submenu');
const $various = $menu.children;

// 클릭 이벤트
$menu.addEventListener('click', function (e) {
  const $clickevent = e.target.parentNode;
  ([...$various].map((item) => {
    item.classList.remove('menu-act');
  }));
  $clickevent.classList.add('menu-act');
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
