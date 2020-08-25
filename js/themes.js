let page = document.querySelector('.page');
let themeButtonRu = document.querySelector('.btn-ru');
let themeButtonEn = document.querySelector('.btn-en');

themeButtonRu.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
  page.classList.toggle('work-light');
  page.classList.toggle('work-dark');
}

themeButtonEn.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
  page.classList.toggle('work-light');
  page.classList.toggle('work-dark');
}
