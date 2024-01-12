const darkModeToggle = document.querySelector("#theme-button");
const darkModeToggleMobile = document.querySelector("#theme-button-mobile");
const Paris = document.querySelector("#villedeparis img");
function activateDarkMode() {
  darkModeToggle.classList.remove("ai-toggle-off-fill");
  darkModeToggleMobile.classList.remove("ai-toggle-off-fill");
  darkModeToggle.classList.add("ai-toggle-on-fill");
  darkModeToggle.classList.add("checked");
  darkModeToggleMobile.classList.add("ai-toggle-on-fill");
  darkModeToggleMobile.classList.add("checked");
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  if (Paris) {
    Paris.style.filter = "";
  }
}

function activateLightMode() {
  darkModeToggle.classList.remove("ai-toggle-on-fill");
  darkModeToggle.classList.remove("checked");
  darkModeToggleMobile.classList.remove("ai-toggle-on-fill");
  darkModeToggleMobile.classList.remove("checked");
  darkModeToggle.classList.add("ai-toggle-off-fill");
  darkModeToggleMobile.classList.add("ai-toggle-off-fill");
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  if (Paris) {
    Paris.style.filter = "brightness(0)";
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const lightModePreference = window.matchMedia("(prefers-color-scheme: light)");
lightModePreference.addEventListener("change", (e) => e.matches && activateLightMode());
lightModePreference.addListener((e) => e.matches && activateLightMode());
if (lightModePreference.matches) {
  if (getCookie("theme") == "light") {
    activateLightMode();
  } else {
    activateDarkMode();
  }
} else {
  if (getCookie("theme") == "dark") {
    activateDarkMode();
  } else {
    activateLightMode();
  }
}

darkModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    activateDarkMode();
    setCookie("theme", "dark", 365);
  } else {
    activateLightMode();
    setCookie("theme", "light", 365);
  }
});

darkModeToggleMobile.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    activateDarkMode();
    setCookie("theme", "dark", 365);
  } else {
    activateLightMode();
    setCookie("theme", "light", 365);
  }
});
