// ********************
// nav nested lists
// ********************
const mainLinks = document.querySelectorAll("header nav > ul > li");
const features = document.createElement("ul");
const featuresLink = document.getElementById("features-btn");
const companyLink = document.getElementById("company-btn");

features.classList.add("features");
const featuersHtml = `
<li>
  <img src="./images/icon-todo.svg"/>
  <a href="#">Todo List</a>
</li>
<li>
  <img src="./images/icon-calendar.svg"/>
  <a href="#">Calendar</a>
</li>
  <li>
  <img src="./images/icon-reminders.svg"/>
  <a href="#">Reminders</a>
</li>
<li>
  <img src="./images/icon-planning.svg"/>
  <a href="#">Planning</a>
</li>
`;
features.innerHTML = featuersHtml;

const company = document.createElement("ul");
company.classList.add("company");
const companyHtml = `
<li>
  <a href="#">History</a>
</li>
<li>
  <a href="#">Our Team</a>
</li>
<li>
  <a href="#">Blog</a>
</li>
`;
company.innerHTML = companyHtml;

mainLinks.forEach((link, i, arr) => {
  link.addEventListener("click", () => {
    // we clicked an active link remove active
    if (link.classList.contains("active")) {
      link.classList.remove("active");
      if (link === featuresLink) {
        link.removeChild(features);
        link.classList.remove("appended");
      }
      if (link === companyLink) {
        link.removeChild(company);
        link.classList.remove("appended");
      }
    }
    // if not active link add active and deactivate any other link
    else {
      //active
      link.classList.add("active");
      //append featues or company
      if (link === featuresLink) {
        link.appendChild(features);
        link.classList.add("appended");
      }
      if (link === companyLink) {
        link.appendChild(company);
        link.classList.add("appended");
      }
      //deactivate other links
      arr.forEach((l, x) => {
        if (i !== x) {
          l.classList.remove("active");
        }
      });
    }
    // if not active and children appended remove features or company
    if (
      !featuresLink.classList.contains("active") &&
      featuresLink.classList.contains("appended")
    ) {
      featuresLink.removeChild(features);
      featuresLink.classList.remove("appended");
    }
    if (
      !companyLink.classList.contains("active") &&
      companyLink.classList.contains("appended")
    ) {
      companyLink.removeChild(company);
      companyLink.classList.remove("appended");
    }
  });
});

// ********************
// nav menu open and close
// ********************
const navBox = document.querySelector("header .container .box");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.createElement("img");
closeBtn.src = "./images/icon-close-menu.svg";
closeBtn.alt = "close";
const overlay = document.createElement("div");
overlay.classList.add("overlay");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  navBox.style.display = "flex";
  document.querySelector("header .container").appendChild(closeBtn);
  document.body.appendChild(overlay);
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  navBox.style.display = "none";
  document.querySelector("header .container").removeChild(closeBtn);
  document.body.removeChild(overlay);
});
