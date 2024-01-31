const nav_mobile_E4 = document.querySelector("#mobile-bar #epreuveE4");
const nav_mobile_E5 = document.querySelector("#mobile-bar #epreuveE5");
const nav_mobile_veille = document.querySelector("#mobile-bar #veille");

const mobile_E4 = document.querySelector("#mobile-bar #epreuveE4 #mobile-E4");
const mobile_E5 = document.querySelector("#mobile-bar #epreuveE5 #mobile-E5");
const mobile_veille = document.querySelector("#mobile-bar #veille #mobile-veille");

function AppearMobile(name) {
  if (name.style.display == "none") {
    name.style.display = "block";
  } else {
    name.style.display = "none";
  }
}

function DisAppearMobile(name) {
  if (name.style.display == "block") {
    name.style.display = "none";
  }
}

nav_mobile_E4.addEventListener("click", function () {
  AppearMobile(mobile_E4);
  DisAppearMobile(mobile_E5);
  DisAppearMobile(mobile_veille);
});

nav_mobile_E5.addEventListener("click", function () {
  AppearMobile(mobile_E5);
  DisAppearMobile(mobile_E4);
  DisAppearMobile(mobile_veille);
});

nav_mobile_veille.addEventListener("click", function () {
  AppearMobile(mobile_veille);
  DisAppearMobile(mobile_E4);
  DisAppearMobile(mobile_E5);
});

window.onload = function () {
  mobile_E4.style.display = "none";
  mobile_E5.style.display = "none";
  mobile_veille.style.display = "none";
};

function isOnline() {
  let isTabVisible = true;
  if (typeof document.hidden !== "undefined") {
    isTabVisible = !document.hidden;
  } else if (typeof document.msHidden !== "undefined") {
    isTabVisible = !document.msHidden;
  } else if (typeof document.webkitHidden !== "undefined") {
    isTabVisible = !document.webkitHidden;
  }

  if (isTabVisible) {
    document.title = "Alexis Thierry-Bellefond";
  } else {
    document.title = "C'est moi Alexis !";
  }
  setTimeout(isOnline, 150);
}

isOnline();