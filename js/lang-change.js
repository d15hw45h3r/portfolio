let pageLang = document.querySelector('.page');
let langButtonRu = document.getElementById('btn-lang-ru');
let langButtonEn = document.querySelector('.btn-lang-en');

langButtonRu.onclick = function () {
  pageLang.classList.toggle('en');
  pageLang.classList.toggle('ru');
}

langButtonEn.onclick = function () {
  pageLang.classList.toggle('ru');
  pageLang.classList.toggle('en');
}
