let upButton = document.querySelector('.fa-angle-up');
let logoButton = document.querySelector('.logo-btn');

logoButton.onclick = function () {
  window.scrollTo(0,0);
}

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
}

upButton.onclick = function () {
  window.scrollTo(0, 0);
}
