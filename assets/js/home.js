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
      setTimeout(TextReverse, 150);
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
      setTimeout(ChangeText, 150);
    }
  }
  ChangeText();
}

ChangeHomeText();

function showMLC() {
  const MLC = document.querySelector("#myluxurycarparis");
  const Paris = document.querySelector("#villedeparis");
  MLC.style.display = "block";
  Paris.style.display = "none";
}

function showParis() {
  const MLC = document.querySelector("#myluxurycarparis");
  const Paris = document.querySelector("#villedeparis");
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

  const competencesSkillbarContainer = document.createElement("div");
  competencesSkillbarContainer.className = "competences-skillbar-container";

  const competencesSkillbarTitle = document.createElement("p");
  competencesSkillbarTitle.className = "competences-skillbar-title";
  competencesSkillbarTitle.innerHTML = "HTML";
  const competencesSkillbar = document.createElement("div");
  competencesSkillbar.className = "competences-skillbar";
  const competencesSkillbarProgress = document.createElement("div");
  competencesSkillbarProgress.className = "competences-skillbar-progress";
  competencesSkillbarProgress.style.backgroundColor = "#c95934";
  competencesSkillbarProgress.style.width = "99%";
  competencesSkillbarProgress.innerHTML = "99%";

  const competencesSkillbarTitle2 = document.createElement("p");
  competencesSkillbarTitle2.className = "competences-skillbar-title";
  competencesSkillbarTitle2.innerHTML = "CSS";
  const competencesSkillbar2 = document.createElement("div");
  competencesSkillbar2.className = "competences-skillbar";
  const competencesSkillbarProgress2 = document.createElement("div");
  competencesSkillbarProgress2.className = "competences-skillbar-progress";
  competencesSkillbarProgress2.style.width = "95%";
  competencesSkillbarProgress2.innerHTML = "95%";
  competencesSkillbarProgress2.style.backgroundColor = "#484cdf";

  const competencesSkillbarTitle3 = document.createElement("p");
  competencesSkillbarTitle3.className = "competences-skillbar-title";
  competencesSkillbarTitle3.innerHTML = "Javascript";
  const competencesSkillbar3 = document.createElement("div");
  competencesSkillbar3.className = "competences-skillbar";
  const competencesSkillbarProgress3 = document.createElement("div");
  competencesSkillbarProgress3.className = "competences-skillbar-progress";
  competencesSkillbarProgress3.style.width = "85%";
  competencesSkillbarProgress3.innerHTML = "85%";
  competencesSkillbarProgress3.style.backgroundColor = "#e5de66";

  const competencesSkillbarTitle4 = document.createElement("p");
  competencesSkillbarTitle4.className = "competences-skillbar-title";
  competencesSkillbarTitle4.innerHTML = "PHP";
  const competencesSkillbar4 = document.createElement("div");
  competencesSkillbar4.className = "competences-skillbar";
  const competencesSkillbarProgress4 = document.createElement("div");
  competencesSkillbarProgress4.className = "competences-skillbar-progress";
  competencesSkillbarProgress4.style.width = "95%";
  competencesSkillbarProgress4.innerHTML = "95%";
  competencesSkillbarProgress4.style.backgroundColor = "#7d79b0";

  const competencesSkillbarTitle5 = document.createElement("p");
  competencesSkillbarTitle5.className = "competences-skillbar-title";
  competencesSkillbarTitle5.innerHTML = "MySQL";
  const competencesSkillbar5 = document.createElement("div");
  competencesSkillbar5.className = "competences-skillbar";
  const competencesSkillbarProgress5 = document.createElement("div");
  competencesSkillbarProgress5.className = "competences-skillbar-progress";
  competencesSkillbarProgress5.style.width = "75%";
  competencesSkillbarProgress5.innerHTML = "75%";
  competencesSkillbarProgress5.style.backgroundColor = "#385f86";

  const competencesSkillbarTitle6 = document.createElement("p");
  competencesSkillbarTitle6.className = "competences-skillbar-title";
  competencesSkillbarTitle6.innerHTML = "Python";
  const competencesSkillbar6 = document.createElement("div");
  competencesSkillbar6.className = "competences-skillbar";
  const competencesSkillbarProgress6 = document.createElement("div");
  competencesSkillbarProgress6.className = "competences-skillbar-progress";
  competencesSkillbarProgress6.style.width = "75%";
  competencesSkillbarProgress6.innerHTML = "75%";
  competencesSkillbarProgress6.style.backgroundColor = "#f4e278";

  const competencesCVButtonContainer = document.createElement("div");
  competencesCVButtonContainer.className = "competences-cv-button-container";
  const competencesCVButton = document.createElement("button");
  competencesCVButton.className = "competences-cv-button";
  competencesCVButton.innerHTML = "Télécharger mon CV";

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
  competencesContent.appendChild(competencesSkillbarContainer);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle);
  competencesSkillbarContainer.appendChild(competencesSkillbar);
  competencesSkillbar.appendChild(competencesSkillbarProgress);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle2);
  competencesSkillbarContainer.appendChild(competencesSkillbar2);
  competencesSkillbar2.appendChild(competencesSkillbarProgress2);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle3);
  competencesSkillbarContainer.appendChild(competencesSkillbar3);
  competencesSkillbar3.appendChild(competencesSkillbarProgress3);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle4);
  competencesSkillbarContainer.appendChild(competencesSkillbar4);
  competencesSkillbar4.appendChild(competencesSkillbarProgress4);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle5);
  competencesSkillbarContainer.appendChild(competencesSkillbar5);
  competencesSkillbar5.appendChild(competencesSkillbarProgress5);
  competencesSkillbarContainer.appendChild(competencesSkillbarTitle6);
  competencesSkillbarContainer.appendChild(competencesSkillbar6);
  competencesSkillbar6.appendChild(competencesSkillbarProgress6);
  competencesContent.appendChild(competencesCVButtonContainer);
  competencesCVButtonContainer.appendChild(competencesCVButton);

  CloseButton.addEventListener("click", function () {
    competencesModal.remove();
  });

  competencesCVButton.addEventListener("click", function () {
    CVLink();
  });
}

function CVLink() {
  window.open("../assets/CV_BTS.pdf");
}

function SendEmail($email, $subject, $message) {
  const sendEmailConst = async () => {
    const apiKey = "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";
    const data = {
      personalizations: [
        {
          to: [{ email: $email }],
          subject: $subject,
        },
      ],
      from: { email: "alexistb2904@gmail.com" },
      content: [{ type: "text/plain", value: $message }],
    };

    try {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  sendEmailConst();
}
