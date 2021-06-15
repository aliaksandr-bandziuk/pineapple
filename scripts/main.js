'use strict';

const mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuList = document.querySelector('.mobile-menu__list'),
      scrollTop = document.querySelector('.scroll-top');;

const toggleMenu = () => mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu__close');
  mobileMenuList.classList.toggle('mobile-menu__list-hidden');
})

const scrollToTop = () => scrollTop.addEventListener('click', () => {
  
  window.scrollTo({
    top: 1,
    behavior: "smooth"
});

})

toggleMenu();
scrollToTop();