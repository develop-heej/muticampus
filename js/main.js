$(document).ready(function() {
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var btnMenubar = $('.menubar, .btn-menubar');
  var menubar = $('.menubar');
  var menu = $('.main-menu');
  var menuLi = $('.main-menu > li');
  var menuLast = $('.main-menu li:last-child');
  var subMenu = $('.sub-menu');
  var subLast = $('.main-menu li:last-child li:last-child a');

  btnMenubar.click(function() {
    menu.toggleClass('main-menu-act');
    btnMenubar.toggleClass('menubar-act');
    if (btn.hasClass('menubar-act')) {
      btn.text("메인메뉴 닫기");
    } else {
      btn.text("메인메뉴 열기");
    }
  });

  subLast.focusout(function() {
    menu.removeClass('main-menu-act');
    btnMenubar.removeClass('menubar-act');
    btn.text("메인메뉴 열기");
  });

  menuLi.click(function() {
    $(this).siblings().find('.sub-menr').removeClass('sub-menu-act');
    $(this).find('.sub-menu').addClass('sub-menu-act');
  });
  menuLi.keyup(function(e) {
    e.preventDefault(); //a나 button태그등의 기본이벤트를 막아줌
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).siblings().find('.sub-menr').removeClass('sub-menu-act');
      $(this).find('.sub-menu').addClass('sub-menu-act');
    }
  });

  menuLi.focusin(function() {
    $(this).siblings('.sub-menu').removeClass('sub-menu-act');
  });

  menuLast.focusout(function() {
    if (!(subMenu.hasClass('sub-menu-act'))) {
      btnMenubar.removeClass('menubar-act');
      menu.removeClass('menu-act');
    }
  });
});