// Nav button toggle

let navLinks = document.querySelector('.landing .links');

function toggleNav() {
  navLinks.classList.toggle('open')
}

let accordinBtn = document.querySelectorAll('.features ul li');
let accBtnAraay = Array.from(accordinBtn);


accBtnAraay.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    accBtnAraay.forEach((ele) => {
      ele.classList.remove('open')
    });
    e.currentTarget.classList.add('open');
  });
})
