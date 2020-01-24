const $menu = document.querySelector('.menu');
const $items = document.querySelector('.menu-item');
const $various = $menu.children;

// 클릭 이벤트
$menu.addEventListener('click', function (e) {
  const $event = e.target.parentNode;
  if ([...$various].map((item) => {
    item.classList.remove('menu-act');
  }));
  $event.classList.add('menu-act');
});
