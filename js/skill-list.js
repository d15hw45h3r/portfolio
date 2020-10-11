var skillDataHTML = [
  "layouts, positioning",
  "display, box, grid, flex-box",
  "responsive design",
  "animation",
  "svg pictures",
  "emotion",
];

var skillDataJS = [
  "DOM manipulation",
  "fetch API / Ajax",
  "ES6 / modular JS",
  "hooks",
  "template manipulation",
];

var skillListHTML = document.querySelector(".skill-list-1");
var skillListJS = document.querySelector(".skill-list-2");

var addItem = function (item) {
  var listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
};

for (let i = 0; i < skillDataHTML.length; i++) {
  let list = addItem(skillDataHTML[i]);
  skillListHTML.appendChild(list);
}

for (let i = 0; i < skillDataJS.length; i++) {
  let list = addItem(skillDataJS[i]);
  skillListJS.appendChild(list);
}
