
var btn = document.getElementById('theme-button');
var link = document.getElementById('theme-link');

btn.addEventListener("click", function () { ChangeTheme(); });
btn.addEventListener("click", function () { ChangeText(); });

function ChangeTheme() {
  let lightTheme = "css/light-theme.css";
  let darkTheme = "css/dark-theme.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if(currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark-theme";
  }
  else {
    currTheme = lightTheme;
    theme = "light-theme";
  }

  link.setAttribute("href", currTheme);
}

function ChangeText() {
  if (btn.innerHTML == "Темная тема") {
    btn.innerHTML = "Светлая тема";
  }
  else {
    btn.innerHTML = "Темная тема";
  }
}
