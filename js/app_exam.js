const menu = document.querySelector('.menu');
const icons = menu.querySelectorAll('.submenu a');
const board = document.querySelector('.board');

// 전체 클래스 삭제하고 액티브 위치에만 클래스 추가하는 함수 => 내비게이션과 보드에서 공통 사용
const changeActClass = target => {
  // target.tagName은 'LI'는 내비게이션 'SECTION'은 보드이다
  const condition = target.tagName === 'LI';
  const removeTargets = condition ? menu.children : board.children;
  const addActiveClass = condition ? 'menu-act' : 'board-act';
  // active 클래스 전체 삭제하는 함수
  [...removeTargets].map(removeTarget => {
    removeTarget.classList.remove(`${addActiveClass}`);
  });
  // 타겟에만 active 클래스 추가하는 함수
  target.classList.add(`${addActiveClass}`);
};

// 메인 메뉴 이벤트 함수 (click & mouseover & focusin)
const mainMenuEvent = ({ type, target }) => {
  // 마우스 이벤트는 target의 부모요소, 키보드 이벤트는 target이 클래스가 추가/삭제되는 지점이다
  const eventTarget = type === 'focusin' ? target : target.parentNode;
  // 이벤트 발생 위치가 '.menu-item'일 때만 해당 위치를 클래스 변경 함수의 매개변수로 호출한다
  if (eventTarget.matches('.menu-item')) {
    changeActClass(eventTarget);
  }
};

// 서브메뉴의 기본 아이콘 삽입
[...icons].map(basicIcon => basicIcon.setAttribute('class', 'icon-dot-circled'));

// 서브메뉴에 이벤트가 발생할 때(진입과 탈출)마다 아이콘이 변경된다
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

// 탭 메뉴 이벤트 함수 (click)
const tabMenuEvent = e => {
  e.preventDefault();
  // 내비게이션과 동일하게 클래스가 추가/삭제 되어야 하는 위치를 매개변수에 담아서 호출한다
  const panel = e.target.parentNode.parentNode;
  changeActClass(panel);
};

// 이벤트 핸들러
// 메인 메뉴
menu.addEventListener('click', mainMenuEvent);
menu.addEventListener('mouseover', mainMenuEvent);
menu.addEventListener('focusin', mainMenuEvent);
// 서브 메뉴
menu.addEventListener('mouseover', subMenuChangeIcon.activeEvent);
menu.addEventListener('mouseout', subMenuChangeIcon.inactiveEvent);
menu.addEventListener('focusin', subMenuChangeIcon.activeEvent);
menu.addEventListener('focusout', subMenuChangeIcon.inactiveEvent);
// 탭 메뉴
board.addEventListener('click', tabMenuEvent);
