"use strict";

// Variables

const toggleButton = document.querySelector(".toggleButton");
const dropdown = document.querySelector("#dropdown");
const taskbarDLink = document.querySelector(".taskbarDLink");
const taskbarDWrap = document.querySelector(".taskbarDWrap");
const taskbarDList = document.querySelector(".taskbarDList");
const menubtn = document.querySelector(".menubtn");
const taskbar = document.querySelector("#taskbar");
const root = document.querySelector(":root");
const progressBar = document.querySelector("#progressBar");
const progressBarFill = document.querySelector("#progressBarFill");
const body = document.querySelector("body");
const html = document.querySelector("html");
const cursor = document.querySelector("#cursor");
const themeBtn = document.querySelector(".themeBtn");
const themeDBtn = document.querySelector(".themeDBtn");
const preLoader = document.querySelector("#preLoader");
const container = document.querySelector("#container");
const contactForm = document.querySelector("#contactForm");
const submittedText = document.querySelector("#submittedText");
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactNumber = document.querySelector("#number");
const contactMsg = document.querySelector("#contactMsg");
const sendbtn = document.querySelector("#sendbtn");
const particles = document.querySelector("#particles-js");
const alertBox = document.querySelector('#alertBox');
const notificationCloseBtn = document.querySelector('#notificationCloseBtn');
const nightMode = document.querySelector('#nightMode');

// Preloader

window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

// Theme

const themes = [
  ["#f7eefc", "#020401", "#5349c2", "#091315", "#da166e"], // Default Theme
  ["#edf1fd", "#030817", "#698eec", "#061332", "#809fef"],
  ["#f9e8dc", "#1a0d04", "#ddcc31", "#060901", "#98dd31"],
  ["#030607", "#deeef2", "#3d8899", "#f8fbfc", "#367887"],
  ["#f6dff6", "#140514", "#7cdb7b", "#000000", "#7cdb7b"],
  ["#040c2f", "#d5dcfc", "#f04769", "#b8c5f9", "#69f047"],
  ["#fcf7ed", "#1f1605", "#738415", "#183509", "#142c07"],
  ["#effbf3", "#0b2815", "#30b09d", "#03090c", "#1a4860"],
  ["#0e0205", "#fbdbe4", "#118864", "#f7bfd0", "#062d21"],
];

var colorTheme;

if (localStorage.getItem("Color Theme") == null) {
  colorTheme = 0;
} else {
  colorTheme = localStorage.getItem("Color Theme");
}

const currentTheme = themes[colorTheme];

function applyTheme() {
  const currentTheme = themes[colorTheme];

  root.style.setProperty("--text", currentTheme[0]);
  root.style.setProperty("--background", currentTheme[1]);
  root.style.setProperty("--primary-button", currentTheme[2]);
  root.style.setProperty("--secondary-button", currentTheme[3]);
  root.style.setProperty("--accent", currentTheme[4]);

  localStorage.setItem("Color Theme", colorTheme);
}

function themeChange() {
  colorTheme = (colorTheme + 1) % themes.length;
  applyTheme();
  notification("Notification", "New Theme Applied");

}

themeBtn.addEventListener("click", themeChange);
themeBtn.addEventListener("dblclick", particlesToggle);
themeDBtn.addEventListener("click", themeChange);
themeDBtn.addEventListener("dblclick", particlesToggle);

var particlesStatus;

if (localStorage.getItem("Particles Status") == null) {
  particlesStatus = "true";
  localStorage.setItem("Particles Status", "true");
} else if (localStorage.getItem("Particles Status") == "true") {
  particlesStatus = "true";
  root.style.setProperty("--particles-height", "100vh");
} else if (localStorage.getItem("Particles Status") == "false") {
  particlesStatus = "false";
  root.style.setProperty("--particles-height", "0");
}

function particlesToggle() {
  if (particlesStatus == "false") {
    root.style.setProperty("--particles-height", "100vh");
    particlesStatus = "true";
    localStorage.setItem("Particles Status", particlesStatus);
    notification("notification", "Particles Turned ON (If you are unable to see it, try reloading the page.)")
  }
  else if (particlesStatus == "true") {
    // particles.style.display = "none"
    root.style.setProperty("--particles-height", "0");
    particlesStatus = "false";
    localStorage.setItem("Particles Status", particlesStatus);
    notification("notification", "Particles Turned OFF")
  }
}

applyTheme(); // Apply the initial theme on page load

// Responsive Taskbar

function burgerToggles() {
  dropdown.classList.toggle("open");
  menubtn.classList.toggle("ri-close-line");
  menubtn.classList.toggle("ri-menu-line");
}

toggleButton.addEventListener("click", burgerToggles);
taskbarDLink.addEventListener("click", burgerToggles);
taskbarDWrap.addEventListener("click", burgerToggles);
taskbarDList.addEventListener("click", burgerToggles);

container.onclick = function () {
  dropdown.classList.remove("open");
  menubtn.classList.remove("ri-close-line");
  menubtn.classList.add("ri-menu-line");
};

// Taskbar Color

window.addEventListener("load", function () {
  if (window.scrollY > 25) {
    taskbar.classList.add("scrolled");
    progressBar.classList.add("scrolled");
    progressBarFill.classList.add("scrolled");
  } else {
    taskbar.classList.remove("scrolled");
    progressBar.classList.remove("scrolled");
    progressBarFill.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    taskbar.classList.add("scrolled");
    progressBar.classList.add("scrolled");
    progressBarFill.classList.add("scrolled");
  } else {
    taskbar.classList.remove("scrolled");
    progressBar.classList.remove("scrolled");
    progressBarFill.classList.remove("scrolled");
  }
});

// Taskbar Height

root.style.setProperty("--taskbar-height", "${#taskbar.clientHeight}px");

// Progress Bar


window.onscroll = function () {
  var containerHeight;
  var containerPos;
  var containerPer;
  var diff;
  var progressBarPer;
  containerHeight = body.offsetHeight - window.innerHeight;
  containerPos = body.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  containerPer = (diff / containerHeight) * 100;
  progressBarPer = Math.floor(100 - containerPer);
  progressBarFill.style.width = progressBarPer + "%";
};

// Local Storage


function saveContactData() {
  var saveContactDataCheckbox = document.querySelector(
    "#saveContactDataCheckbox"
  );
  if (saveContactDataCheckbox.checked) {
    localStorage.setItem("Name", contactName.value);
    localStorage.setItem("Email", contactEmail.value);
    localStorage.setItem("Number", contactNumber.value);
  }
}

function removeContactData() {
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("Number");
}

// Shotcuts

// Change Theme by Shotcut
document.addEventListener("keydown", e => {
  if (e.defaultPrevented) {
    return;
  }
  if ((e.altKey && e.key === "t")) {
    themeChange();
  }
  if ((e.altKey && e.key === "p")) {
    particlesToggle();
  }
})

// Notification

function notification(title, message) {
  document.getElementById("alertTopStrong").innerText = title;
  document.getElementById("alertBottom").innerText = message;
  alertBox.classList.add("opened")
  setTimeout(() => {
    alertBox.classList.add("closed")
    alertBox.classList.remove("opened")
  }, 6000);
}

notificationCloseBtn.onclick = function () {
  alertBox.classList.add("closed")
  alertBox.classList.remove("opened")
}

// Grayscale

document.addEventListener("keydown", e => {
  if (e.defaultPrevented) {
    return;
  }
  if ((e.altKey && e.key === "g")) {
    html.classList.add("grayScale");
  }
  if ((e.altKey && e.key === "n")) {
    nightMode.style.display = "flex"
  }
})

