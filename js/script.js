document.addEventListener("DOMContentLoaded", ()=> {

  //메뉴 버튼
  const menu = document.querySelector("header nav .menu");
  const div_menu = document.querySelector("header nav div");
  const menuOpen = ()=> {
    menu.textContent = 'close';
    div_menu.style.height = "420px";
    div_menu.style.transition = "0.5s";
  };
  const menuClose = ()=> {
    menu.textContent = 'menu';
    div_menu.style.height = 0;
    div_menu.style.transition = "0.5s";
  };
  menu.addEventListener("click", ()=> {
    menu.textContent === 'menu' ? menuOpen() : menuClose();
  });



});