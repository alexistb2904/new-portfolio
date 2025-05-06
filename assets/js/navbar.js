document.addEventListener("DOMContentLoaded", () => {
  function buildPath(relativePath) {
    const currentPath = window.location.origin + (relativePath != "" ? "/" + relativePath : "");
    return currentPath;
  }

  const navHTML = `
    <nav class="mobile-active" id="generated-nav">
      <span id="computer-bar">
        <a href="${buildPath("")}"><img src="${buildPath("assets/img/logo_white.png")}" alt="Logo" /></a>
        <ul id="nav-bar">
          <li><a href="${buildPath("#presentation")}">Présentation</a></li>
          <li id="epreuveE5">
            <a href="${buildPath("epreuveE5/")}">Epreuve E5</a>
            <div id="epreuveE5-dropdown">
              <ul>
                <li><a href="${buildPath("epreuveE5/#synthese")}">Tableau de synthèse</a></li>
                <li><a href="${buildPath("epreuveE5/#formation")}">Missions réalisées en formation</a></li>
                <li><a href="${buildPath("epreuveE5/#entreprise")}">Missions réalisées en Entreprise</a></li>
              </ul>
            </div>
          </li>
          <li id="epreuveE6">
            <a href="${buildPath("epreuveE6/")}">Epreuve E6</a>
            <div id="epreuveE6-dropdown">
              <ul>
                <li><a href="${buildPath("epreuveE6/#PPEDESKTOP")}">Situation 1</a></li>
                <li><a href="${buildPath("epreuveE6/#PPEWEB")}">Situation 2</a></li>
                <li><a href="${buildPath("epreuveE6/certification")}">Certifications</a></li>
              </ul>
            </div>
          </li>
          <li id="veille">
            <a href="${buildPath("veille/")}">Veille Technologique</a>
            <div id="veille-dropdown">
              <ul>
                <li><a href="${buildPath("veille/flux/")}">Flux</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <i class="ai-toggle-off-fill" id="theme-button"></i>
      </span>
      <span id="mobile-bar">
        <ul id="nav-bar">
          <li><a href="${buildPath("#presentation")}">Présentation</a></li>
          <li id="epreuveE5" class="epreuveAnimation">
            <a>Epreuve E5</a>
            <div id="mobile-E5">
              <ul>
                <li><a href="${buildPath("epreuveE5/#synthese")}">Tableau de synthèse</a></li>
                <li><a href="${buildPath("epreuveE5/#formation")}">Missions réalisées en formation</a></li>
                <li><a href="${buildPath("epreuveE5/#entreprise")}">Missions réalisées en Entreprise</a></li>
              </ul>
            </div>
          </li>
          <li id="epreuveE6" class="epreuveAnimation">
            <a>Epreuve E6</a>
            <div id="mobile-E6">
              <ul>
                <li><a href="${buildPath("epreuveE6/#PPEDESKTOP")}">Situation 1</a></li>
                <li><a href="${buildPath("epreuveE6/#PPEWEB")}">Situation 2</a></li>
                <li><a href="${buildPath("epreuveE6/certification")}">Certifications</a></li>
              </ul>
            </div>
          </li>
          <li id="veille" class="epreuveAnimation">
            <a>Veille Technologique</a>
            <div id="mobile-veille">
              <ul>
                <li><a href="${buildPath("veille/")}">Veille</a></li>
                <li><a href="${buildPath("veille/flux/")}">Flux</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <i class="ai-toggle-off-fill" id="theme-button-mobile"></i>
        <a href="${buildPath("")}"><img src="${buildPath("assets/img/logo_white.png")}" alt="Logo" /></a>
        <hr />
      </span>
    </nav>
  `;
  const navContainer = document.querySelector("header");
  navContainer.innerHTML = navHTML;

  const nav_mobile_E4 = document.querySelector("#mobile-bar #epreuveE5");
  const nav_mobile_E5 = document.querySelector("#mobile-bar #epreuveE6");
  const nav_mobile_veille = document.querySelector("#mobile-bar #veille");

  const mobile_E4 = document.querySelector("#mobile-bar #epreuveE5 #mobile-E5");
  const mobile_E5 = document.querySelector("#mobile-bar #epreuveE6 #mobile-E6");
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
});
