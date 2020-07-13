var btn = document.getElementById('theme-en-button');
var link = document.getElementById('theme-en-link');

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
  if (btn.innerHTML == "Dark theme") {
    btn.innerHTML = "Light theme";
  }
  else {
    btn.innerHTML = "Dark theme";
  }
}
