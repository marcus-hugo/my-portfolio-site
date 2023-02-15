const body = document.querySelector("body")
const nav = document.querySelector(".nav")
const projects = document.querySelectorAll(".project")
const checkbox = document.getElementById("theme-toggle")
const toggle = document.querySelector(".toggle-switch__input")
var mediaQueryList = window.matchMedia("(prefers-color-scheme: light)")
let isToggleChecked = toggle.getAttribute("aria-checked")
let darkMode = localStorage.getItem("darkMode")

mediaQueryList.addEventListener("change", systemChange)

function addLightTheme() {
  body.classList.remove("dark-theme")
  body.classList.add("light-theme")

  nav.classList.remove("dark-theme")
  nav.classList.add("light-theme")

  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("dark-theme")
    projects[i].classList.add("light-theme")
  }
}

function addDarkTheme() {
  body.classList.remove("light-theme")
  body.classList.add("dark-theme")

  nav.classList.remove("light-theme")
  nav.classList.add("dark-theme")

  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("light-theme")
    projects[i].classList.add("dark-theme")
  }
}

function systemChange() {
  console.log("change event listener added")

  if (mediaQueryList.matches === false) {
    toggle.setAttribute("aria-checked", "true")
    checkbox.checked = true
    addDarkTheme()
  } else if (mediaQueryList.matches === true) {
    toggle.setAttribute("aria-checked", "false")
    checkbox.checked = false
    addLightTheme()
  }
}

toggle.addEventListener("click", function () {
  if (checkbox.checked === false) {
    localStorage.setItem("darkMode", "false")
    toggle.setAttribute("aria-checked", "false")
    addLightTheme()
  } else if (checkbox.checked === true) {
    localStorage.setItem("darkMode", "true")
    toggle.setAttribute("aria-checked", "true")
    addDarkTheme()
  }
})

window.onload = () => {
  if (mediaQueryList.matches === false) {
    toggle.setAttribute("aria-checked", "true")
    checkbox.checked = true
  } else {
    toggle.setAttribute("aria-checked", "false")
    checkbox.checked = false
  }

  if (darkMode === "true") {
    mediaQueryList.removeEventListener("change", systemChange)
    toggle.setAttribute("aria-checked", "true")
    checkbox.checked = true
    addDarkTheme()
  } else if (darkMode === "false") {
    mediaQueryList.removeEventListener("change", systemChange)
    toggle.setAttribute("aria-checked", "false")
    checkbox.checked = false
    addLightTheme()
  }
}
