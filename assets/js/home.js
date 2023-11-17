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

const home_text = document.querySelector("#home-text");

function ChangeHomeText() {
  let i = 0;
  let texts = ["développeur", "designer", "apprenti"];
  let currentTextIndex = 0;
  function ChangeText() {
    if (i < texts[currentTextIndex].length) {
      home_text.innerHTML += texts[currentTextIndex].charAt(i);
      i++;
      setTimeout(ChangeText, 150);
    } else {
      setTimeout(TextReverse, 1500);
    }
  }
  function TextReverse() {
    if (i > 0) {
      i--;
      home_text.innerHTML = texts[currentTextIndex].slice(0, i);
      setTimeout(TextReverse, 150);
    } else {
      i = 0;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(ChangeText, 1500);
    }
  }
  ChangeText();
}

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

ChangeHomeText();
isOnline();

function showMLC() {
  const MLC = document.querySelector("#myluxurycarparis");
  const Paris = document.querySelector("#mariedeparis");
  MLC.style.display = "block";
  Paris.style.display = "none";
}

function showParis() {
  const MLC = document.querySelector("#myluxurycarparis");
  const Paris = document.querySelector("#mariedeparis");
  Paris.style.display = "block";
  MLC.style.display = "none";
}

function showCompetences() {
  const competencesModal = document.createElement("div");
  competencesModal.className = "competences-modal";

  const competencesContent = document.createElement("div");
  competencesContent.className = "competences-content";

  const CloseButtonContainer = document.createElement("div");
  CloseButtonContainer.className = "close-button-container";
  const CloseButton = document.createElement("i");
  CloseButton.className = "ai-cross";
  CloseButton.id = "close-button-competences";

  const competencesTitle = document.createElement("h1");
  competencesTitle.className = "competences-title";
  competencesTitle.innerHTML = "Mes Compétences";

  const competencesGrid = document.createElement("div");
  competencesGrid.className = "competences-grid";

  const competencesGridItem1 = document.createElement("img");
  competencesGridItem1.className = "competences-grid-item";
  competencesGridItem1.alt = "Html Logo";
  competencesGridItem1.src = "../assets/img/html.webp";

  const competencesGridItem2 = document.createElement("img");
  competencesGridItem2.className = "competences-grid-item";
  competencesGridItem2.alt = "Css Logo";
  competencesGridItem2.src = "../assets/img/css.webp";

  const competencesGridItem3 = document.createElement("img");
  competencesGridItem3.className = "competences-grid-item";
  competencesGridItem3.alt = "Javascript Logo";
  competencesGridItem3.src = "../assets/img/javascript.webp";

  const competencesGridItem4 = document.createElement("img");
  competencesGridItem4.className = "competences-grid-item";
  competencesGridItem4.alt = "Php Logo";
  competencesGridItem4.src = "../assets/img/php.webp";

  const competencesGridItem5 = document.createElement("img");
  competencesGridItem5.className = "competences-grid-item";
  competencesGridItem5.alt = "Mysql Logo";
  competencesGridItem5.src = "../assets/img/mysql.webp";

  const competencesGridItem6 = document.createElement("img");
  competencesGridItem6.className = "competences-grid-item";
  competencesGridItem6.alt = "Python Logo";
  competencesGridItem6.src = "../assets/img/python.webp";

  const competencesGridItem7 = document.createElement("img");
  competencesGridItem7.className = "competences-grid-item";
  competencesGridItem7.alt = "Lua Logo";
  competencesGridItem7.src = "../assets/img/lua.webp";

  const competencesGridItem8 = document.createElement("img");
  competencesGridItem8.className = "competences-grid-item";
  competencesGridItem8.alt = "React Logo";
  competencesGridItem8.src = "../assets/img/react.webp";

  const competencesGridItem9 = document.createElement("img");
  competencesGridItem9.className = "competences-grid-item";
  competencesGridItem9.alt = "Photoshop Logo";
  competencesGridItem9.src = "../assets/img/ps.webp";

  const competencesGridItem10 = document.createElement("img");
  competencesGridItem10.className = "competences-grid-item";
  competencesGridItem10.alt = "Blender Logo";
  competencesGridItem10.src = "../assets/img/blender.webp";

  // Création de la modal
  document.body.appendChild(competencesModal);
  competencesModal.appendChild(competencesContent);
  competencesContent.appendChild(CloseButtonContainer);
  CloseButtonContainer.appendChild(CloseButton);
  competencesContent.appendChild(competencesTitle);
  competencesContent.appendChild(competencesGrid);
  competencesGrid.appendChild(competencesGridItem1);
  competencesGrid.appendChild(competencesGridItem2);
  competencesGrid.appendChild(competencesGridItem3);
  competencesGrid.appendChild(competencesGridItem4);
  competencesGrid.appendChild(competencesGridItem5);
  competencesGrid.appendChild(competencesGridItem6);
  competencesGrid.appendChild(competencesGridItem7);
  competencesGrid.appendChild(competencesGridItem8);
  competencesGrid.appendChild(competencesGridItem9);
  competencesGrid.appendChild(competencesGridItem10);

  CloseButton.addEventListener("click", function () {
    competencesModal.remove();
  });
}

function SendEmail($email, $subject, $message) {
  Email.send({
    SecureToken: "eeb21ab5-7896-49f2-ae92-7f2731ac6f72",
    To: $email,
    From: "alexistb2904@gmail.com",
    Subject: $subject,
    Body: $message,
  }).then((message) => alert(message));
}
