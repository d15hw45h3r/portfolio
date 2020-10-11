var projectData = [
  {
    link: "https://valeriias-react-calculator.netlify.app",
    imgUrl: "files/react-calculator.png",
    text: "My first project using React.",
    headertext: "React calculator",
  },
  {
    link: "https://github.com/d15hw45h3r/react-weather",
    imgUrl: "files/weather-project.png",
    text:
      "This is an App that shows you a current weather. Used OpenWeatherMap API.",
    headertext: "Weather Cards",
  },
];

var makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createProject = function (project) {
  var projectItem = makeElement("a", "project");
  projectItem.href = project.link;
  projectItem.target = "_blank";
  projects.appendChild(projectItem);

  var detail = makeElement("div", "detail");
  projectItem.appendChild(detail);

  var content = makeElement("div", "project-content");
  detail.appendChild(content);

  var h2 = makeElement("h2");
  h2.textContent = project.headertext;
  content.appendChild(h2);

  var description = makeElement("p");
  description.textContent = project.text;
  content.appendChild(description);

  var image = makeElement("img");
  image.src = project.imgUrl;
  image.alt = project.text;
  content.appendChild(image);

  return projectItem;
};

var projects = document.querySelector(".projects");

for (let i = 0; i < projectData.length; i++) {
  var projectCard = createProject(projectData[i]);
  projects.appendChild(projectCard);
}
