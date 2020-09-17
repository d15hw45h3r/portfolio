page = document.querySelector(".page");
buttonLangEn = document.querySelector(".button-lang-en");
buttonLangRu = document.querySelector(".button-lang-ru");

buttonLangEn.onclick = function () {
  page.classList.toggle("ru");
  page.classList.toggle("en");
};

buttonLangRu.onclick = function () {
  page.classList.toggle("en");
  page.classList.toggle("ru");
};
