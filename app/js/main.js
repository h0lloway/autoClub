$('.listingstwo__slider').slick({
  arrows: true,
  dots: true,
  slidesToShow: 1,
  prevArrow: '<button class="slick-next slick__btn" type="button"></button>',
  nextArrow: '<button class="slick-prev slick__btn" type="button"></button>',
});



document.querySelector('.header__list-link--register').addEventListener('click', register);

document.querySelector('.modal__register').addEventListener('click', register);

document.querySelector('.modal__register1').addEventListener('click', register);

function register() {
  document.querySelector('.modal-reg').classList.add('modal--active');
  document.querySelector('.modal__register').classList.add('blue');
  document.querySelector('.modal-log').classList.remove('modal--active');
  document.querySelector('.modal__login1').classList.remove('blue');
  document.querySelector('.modal-rem').classList.remove('modal--active');
  document.querySelector('.main').classList.add('main--modal');
  document.querySelector('.header').classList.add('header--modal');
  document.querySelector('.body').classList.add('main--modal');
}

document.querySelector('.modal__btn').addEventListener('click', registerClose);

document.querySelector('.modal__close-reg').addEventListener('click', registerClose);

document.querySelector('.modal__login').addEventListener('click', registerClose);

function registerClose() {
  document.querySelector('.modal-reg').classList.remove('modal--active');
  document.querySelector('.modal__register').classList.remove('blue');
  document.querySelector('.main').classList.remove('main--modal');
  document.querySelector('.header').classList.remove('header--modal');
  document.querySelector('.body').classList.remove('main--modal');
}

// 2

document.querySelector('.header__list-link--sign-in').addEventListener('click', login);

document.querySelector('.modal__login').addEventListener('click', login);

document.querySelector('.modal__link2').addEventListener('click', login);


function login() {
  document.querySelector('.modal-log').classList.add('modal--active');
  document.querySelector('.modal__login1').classList.add('blue');
  document.querySelector('.modal-reg').classList.remove('modal--active');
  document.querySelector('.modal__register').classList.remove('blue');
  document.querySelector('.modal-rem').classList.remove('modal--active');
  document.querySelector('.main').classList.add('main--modal');
  document.querySelector('.header').classList.add('header--modal');
  document.querySelector('.body').classList.add('main--modal');
}

document.querySelector('.modal__btn1').addEventListener('click', loginClose);

document.querySelector('.modal__btn1').addEventListener('click', loginClose2);

document.querySelector('.modal__close-log').addEventListener('click', loginClose);

document.querySelector('.modal__close-log').addEventListener('click', loginClose);
document.querySelector('.modal__close-log').addEventListener('click', loginClose2);

document.querySelector('.modal__register1').addEventListener('click', loginClose);

document.querySelector('.modal__link').addEventListener('click', loginClose);

function loginClose() {
  document.querySelector('.modal-log').classList.remove('modal--active');
  document.querySelector('.modal__register1').classList.remove('blue');
}

function loginClose2() {
  document.querySelector('.modal-log').classList.remove('modal--active');
  document.querySelector('.modal__register1').classList.remove('blue');
  document.querySelector('.main').classList.remove('main--modal');
  document.querySelector('.header').classList.remove('header--modal');
  document.querySelector('.body').classList.remove('main--modal');
}

// 3

document.querySelector('.modal__link').addEventListener('click', rem);


function rem() {
  document.querySelector('.modal-log').classList.remove('modal--active');
  document.querySelector('.modal__login1').classList.remove('blue');
  document.querySelector('.modal-reg').classList.remove('modal--active');
  document.querySelector('.modal__register').classList.remove('blue');
  document.querySelector('.modal-rem').classList.add('modal--active');
  document.querySelector('.main').classList.add('main--modal');
  document.querySelector('.header').classList.add('header--modal');
  document.querySelector('.body').classList.add('main--modal');
}

document.querySelector('.modal__link').addEventListener('click', rem);


function rem() {
  document.querySelector('.modal-log').classList.remove('modal--active');
  document.querySelector('.modal__login1').classList.remove('blue');
  document.querySelector('.modal-reg').classList.remove('modal--active');
  document.querySelector('.modal__register').classList.remove('blue');
  document.querySelector('.modal-rem').classList.add('modal--active');
  document.querySelector('.main').classList.add('main--modal');
  document.querySelector('.header').classList.add('header--modal');
  document.querySelector('.body').classList.add('main--modal');
}

document.querySelector('.modal__btn2').addEventListener('click', remClose);

document.querySelector('.modal__link2').addEventListener('click', remClose2);

function remClose() {
  document.querySelector('.modal-rem').classList.remove('modal--active');
  document.querySelector('.main').classList.remove('main--modal');
  document.querySelector('.header').classList.remove('header--modal');
  document.querySelector('.body').classList.remove('main--modal');
}

document.querySelector('.modal__close-rem').addEventListener('click', remClose);


function remClose2() {
  document.querySelector('.modal-rem').classList.remove('modal--active');
}

document.querySelector('.menu__open').addEventListener('click', menuOpen);

function menuOpen() {
  document.querySelector('.menu__list-wrapper').classList.toggle('menu__list-wrapper--active');
  document.querySelector('.menu__list').classList.toggle('menu__list--active');
  document.querySelector('.menu__open').classList.toggle('menu__open--active');
  // document.querySelector('.choice__wrapper').classList.toggle('choice__wrapper--active');
}

// language

document.querySelector('.header__list-language').addEventListener('click', language);

document.querySelector('.header__list-language2').addEventListener('click', language);


function language() {
  document.querySelector('.language').classList.toggle('language--active');
}

// якорь

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// filters

document.querySelector('.filters__selector1').addEventListener('click', filters1);


function filters1() {
  document.querySelector('.filters__list-list').classList.toggle('filters__list-list--active');
}

document.querySelector('.filters__selector1').addEventListener('click', filters1);


function filters1() {
  document.querySelector('.filters__list-list').classList.toggle('filters__list-list--active');
}

document.querySelector('.filters__selector1').addEventListener('click', filters1);


function filters1() {
  document.querySelector('.filters__list-list1').classList.toggle('filters__list-list1--active');
  document.querySelector('.filters__list-list2').classList.remove('filters__list-list2--active');
  document.querySelector('.filters__list-list3').classList.remove('filters__list-list3--active');
  document.querySelector('.filters__list-list4').classList.remove('filters__list-list4--active');
  document.querySelector('.filters__list-list5').classList.remove('filters__list-list5--active');
}

document.querySelector('.filters__selector2').addEventListener('click', filters2);


function filters2() {
  document.querySelector('.filters__list-list2').classList.toggle('filters__list-list2--active');
  document.querySelector('.filters__list-list1').classList.remove('filters__list-list1--active');
  document.querySelector('.filters__list-list3').classList.remove('filters__list-list3--active');
  document.querySelector('.filters__list-list4').classList.remove('filters__list-list4--active');
  document.querySelector('.filters__list-list5').classList.remove('filters__list-list5--active');
}


document.querySelector('.filters__selector3').addEventListener('click', filters3);


function filters3() {
  document.querySelector('.filters__list-list3').classList.toggle('filters__list-list3--active');
  document.querySelector('.filters__list-list2').classList.remove('filters__list-list2--active');
  document.querySelector('.filters__list-list1').classList.remove('filters__list-list1--active');
  document.querySelector('.filters__list-list4').classList.remove('filters__list-list4--active');
  document.querySelector('.filters__list-list5').classList.remove('filters__list-list5--active');
}

document.querySelector('.filters__selector4').addEventListener('click', filters4);


function filters4() {
  document.querySelector('.filters__list-list4').classList.toggle('filters__list-list4--active');
  document.querySelector('.filters__list-list2').classList.remove('filters__list-list2--active');
  document.querySelector('.filters__list-list3').classList.remove('filters__list-list3--active');
  document.querySelector('.filters__list-list1').classList.remove('filters__list-list1--active');
  document.querySelector('.filters__list-list5').classList.remove('filters__list-list5--active');

}

document.querySelector('.filters__selector5').addEventListener('click', filters5);


function filters5() {
  document.querySelector('.filters__list-list5').classList.toggle('filters__list-list5--active');
  document.querySelector('.filters__list-list2').classList.remove('filters__list-list2--active');
  document.querySelector('.filters__list-list3').classList.remove('filters__list-list3--active');
  document.querySelector('.filters__list-list4').classList.remove('filters__list-list4--active');
  document.querySelector('.filters__list-list1').classList.remove('filters__list-list1--active');
}

document.querySelector('.listingstwo__item-btn1').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn2').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn3').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn4').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn5').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn6').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn7').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn8').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn9').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn10').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn11').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn12').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn13').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn14').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn15').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn16').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn17').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn18').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn19').addEventListener('click', modalPay);
document.querySelector('.listingstwo__item-btn20').addEventListener('click', modalPay);

function modalPay() {
  document.querySelector('.modal-pay').classList.add('modal-pay--active');
  document.querySelector('.main').classList.add('main--modal');
  document.querySelector('.header').classList.add('header--modal');
  document.querySelector('.body').classList.add('main--modal');
}

document.querySelector('.modal-pay__close').addEventListener('click', modalPayClose);

function modalPayClose() {
  document.querySelector('.modal-pay').classList.remove('modal-pay--active');
  document.querySelector('.main').classList.remove('main--modal');
  document.querySelector('.header').classList.remove('header--modal');
  document.querySelector('.body').classList.remove('main--modal');
}

// чекбоксы

document.querySelector('.modal-pay__top-chekbox1').addEventListener('click', chek1);

let a = 0;
let b = 0;

function chek1() {
  if (a == 0 && b == 1) {
    document.getElementById('1').textContent = 'PRICE: $0.00 USD';
    document.getElementById('2').textContent = ' $0.00 USD';
    a = 1;
    any();
  }

  if (a == 1 && b == 1) {
    document.getElementById('1').textContent = 'PRICE: $1.50 USD';
    document.getElementById('2').textContent = ' $1.50 USD';
    a = 0;
    any();
  }

  if (a == 1 && b == 0) {
    document.getElementById('1').textContent = 'PRICE: $3.00 USD';
    document.getElementById('2').textContent = ' $3.00 USD';
    a = 0;
    any();
  }

  if (a == 0 && b == 0) {
    document.getElementById('1').textContent = 'PRICE: $1.50 USD';
    document.getElementById('2').textContent = ' $1.50 USD';
    a = 1;
    any();
  }
}


document.querySelector('.modal-pay__top-chekbox2').addEventListener('click', chek2);

function chek2() {
  if (b == 0 && a == 1) {
    document.getElementById('1').textContent = 'PRICE: $0.00 USD';
    document.getElementById('2').textContent = ' $0.00 USD';
    b = 1;
    any();
  }

  if (b == 1 && a == 1) {
    document.getElementById('1').textContent = 'PRICE: $1.50 USD';
    document.getElementById('2').textContent = ' $1.50 USD';
    b = 0;
    any();
  }

  if (b == 0 && a == 0) {
    document.getElementById('1').textContent = 'PRICE: $1.50 USD';
    document.getElementById('2').textContent = ' $1.50 USD';
    b = 1;
    any();
  }

  if (b == 1 && a == 0) {
    document.getElementById('1').textContent = 'PRICE: $3.00 USD';
    document.getElementById('2').textContent = ' $3.00 USD';
    b = 0;
    any();
  }
}



document.querySelector('.filters__open').addEventListener('click', filters);

function filters() {
  document.querySelector('.filters').classList.toggle('filters--active');
  document.querySelector('.filters__open').classList.toggle('filters__open--active');
}