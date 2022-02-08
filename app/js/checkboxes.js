//  ещё чекбоксы

document.querySelector('.payment__top-chekbox1').addEventListener('click', chek3);

let c = 0;
let d = 0;

function chek3() {
  if (c == 0 && d == 1) {
    document.getElementById('3').textContent = 'PRICE: $0.00 USD';
    document.getElementById('4').textContent = ' $0.00 USD';
    c = 1;
    any();
  }

  if (c == 1 && d == 1) {
    document.getElementById('3').textContent = 'PRICE: $1.50 USD';
    document.getElementById('4').textContent = ' $1.50 USD';
    c = 0;
    any();
  }

  if (c == 1 && d == 0) {
    document.getElementById('3').textContent = 'PRICE: $3.00 USD';
    document.getElementById('4').textContent = ' $3.00 USD';
    c = 0;
    any();
  }

  if (c == 0 && d == 0) {
    document.getElementById('3').textContent = 'PRICE: $1.50 USD';
    document.getElementById('4').textContent = ' $1.50 USD';
    c = 1;
    any();
  }
}


document.querySelector('.payment__top-chekbox2').addEventListener('click', chek4);

function chek4() {
  if (d == 0 && c == 1) {
    document.getElementById('3').textContent = 'PRICE: $0.00 USD';
    document.getElementById('4').textContent = ' $0.00 USD';
    d = 1;
    any();
  }

  if (d == 1 && c == 1) {
    document.getElementById('3').textContent = 'PRICE: $1.50 USD';
    document.getElementById('4').textContent = ' $1.50 USD';
    d = 0;
    any();
  }

  if (d == 0 && c == 0) {
    document.getElementById('3').textContent = 'PRICE: $1.50 USD';
    document.getElementById('4').textContent = ' $1.50 USD';
    d = 1;
    any();
  }

  if (d == 1 && c == 0) {
    document.getElementById('3').textContent = 'PRICE: $3.00 USD';
    document.getElementById('4').textContent = ' $3.00 USD';
    d = 0;
    any();
  }
}