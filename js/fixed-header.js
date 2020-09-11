let headerFixed = document.querySelector(".header-alt");

window.onscroll = function () {
  if (window.pageYOffset > 650) {
    headerFixed.classList.add("header");
    headerFixed.classList.remove("header-alt");
  } else {
    headerFixed.classList.remove("header");
    headerFixed.classList.add("header-alt");
  }
};
