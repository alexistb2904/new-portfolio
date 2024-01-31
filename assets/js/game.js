document.addEventListener("keydown", handleKey);

function handleKey(event) {
  if (event.ctrlKey && event.key === "ArrowUp") {
    if (!document.querySelector("#demineur-container")) {
      const gameModal = document.createElement("div");
      gameModal.className = "competences-modal";

      const gameContent = document.createElement("div");
      gameContent.className = "competences-content";

      const CloseButtonContainer = document.createElement("div");
      CloseButtonContainer.className = "close-button-container";
      const CloseButton = document.createElement("i");
      CloseButton.className = "ai-cross";
      CloseButton.id = "close-button-competences";

      const contentDemineur = document.createElement("div");
      contentDemineur.className = "content-demineur";
      contentDemineur.innerHTML = `
    <div id="demineur-container">
			<div id="demineur-header">
				<h1>Démineur</h1>
				<div id="demineur-score">
					<div id="demineur-movement">Mouvement: <span>0</span></div>
                    <div id="demineur-best">Meilleur score: <span>${getCookie("demineur")}</span></div>
                    <div><label class="label-demineur">Taille du plateau<input type="number" id="demineur-size" placeholder="Taille du plateau"></label>
                    <label class="label-demineur">Nombre de Mines<input type="number" id="demineur-mine" placeholder="Nombre de mines"></label></div>
					<div id="demineur-status"></div>
				</div>
			</div>
			<div id="demineur-board"></div>
			<button id="demineur-restart">Recommencer</button>
		</div>
    `;
      document.body.appendChild(gameModal);
      gameModal.appendChild(gameContent);
      gameContent.appendChild(CloseButtonContainer);
      CloseButtonContainer.appendChild(CloseButton);
      gameContent.appendChild(contentDemineur);

      CloseButton.addEventListener("click", () => {
        gameModal.remove();
      });
      const board = document.querySelector("#demineur-board");
      const movementDisplay = document.querySelector("#demineur-movement span");
      const statusDisplay = document.querySelector("#demineur-status");
      const resetButton = document.querySelector("#demineur-restart");
      const bestDisplay = document.querySelector("#demineur-best span");
      const sizeInput = document.querySelector("#demineur-size");
      const mineInput = document.querySelector("#demineur-mine");

      startGame();
      function startGame() {
        let width;
        let height;
        if (sizeInput.value == "") {
          sizeInput.value = 8;
          width = 8;
          height = 8;
        } else if (sizeInput.value < 6 || sizeInput.value > 10) {
          alert("La taille du plateau doit être comprise entre 6 et 10");
          return;
        } else {
          width = parseInt(sizeInput.value);
          height = parseInt(sizeInput.value);
        }

        let mineNumber;
        if (mineInput.value == "") {
          mineInput.value = 10;
          mineNumber = 10;
        } else if (mineInput.value < 1 || mineInput.value > width * height - 1) {
          alert("Le nombre de mines doit être compris entre 1 et " + (width * height - 1));
          return;
        } else {
          mineNumber = parseInt(mineInput.value);
        }

        const boardArray = [];

        function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const mineArray = [];

        statusDisplay.innerHTML = "En cours...";
        for (let i = 0; i < mineNumber; i++) {
          let randomMine = randomInt(0, width * height - 1);
          while (mineArray.includes(randomMine)) {
            randomMine = randomInt(0, width * height - 1);
          }
          mineArray.push(randomMine);
        }
        mineArray.sort((a, b) => a - b);
        console.log(mineArray);
        for (let i = 0; i < width; i++) {
          boardArray.push([]);
          for (let j = 0; j < height; j++) {
            mineArray.includes(i * width + j) ? boardArray[i].push("mine") : boardArray[i].push(i * width + j);
            const square = document.createElement("div");
            square.classList.add("demineur-square");
            square.dataset.index = i * width + j;
            board.appendChild(square);
            square.addEventListener("click", handleClick);
            square.style.width = `${100 / (width + 1.5)}%`;
            square.style.height = `${100 / (width + 1.5)}%`;
          }
        }

        function handleClick() {
          if (
            this.style.backgroundColor != "darkred" &&
            this.style.backgroundColor != "green" &&
            this.style.backgroundColor != "red" &&
            this.style.backgroundColor != "orange"
          ) {
            movementDisplay.innerHTML = parseInt(movementDisplay.innerHTML) + 1;
            if (parseInt(movementDisplay.innerHTML) > getCookie("demineur")) {
              bestDisplay.innerHTML = movementDisplay.innerHTML;
              setCookie("demineur", parseInt(movementDisplay.innerHTML), 365);
            }

            if (mineArray.includes(parseInt(this.dataset.index))) {
              statusDisplay.innerHTML = "Perdu!";
              statusDisplay.style.color = "darkred";
              this.style.backgroundColor = "darkred";
              this.innerHTML = "X";
              for (let i = 0; i < width * height; i++) {
                if (mineArray.includes(i)) {
                  board.children[i].style.backgroundColor = "darkred";
                  board.children[i].innerHTML = "X";
                }
                board.children[i].removeEventListener("click", handleClick);
              }
            } else if (
              mineArray.includes(parseInt(this.dataset.index) + 1) ||
              mineArray.includes(parseInt(this.dataset.index) - 1) ||
              mineArray.includes(parseInt(this.dataset.index) + width) ||
              mineArray.includes(parseInt(this.dataset.index) - width)
            ) {
              this.style.backgroundColor = "red";
            } else if (
              mineArray.includes(parseInt(this.dataset.index) + 2) ||
              mineArray.includes(parseInt(this.dataset.index) - 2) ||
              mineArray.includes(parseInt(this.dataset.index) + width + 1) ||
              mineArray.includes(parseInt(this.dataset.index) - width + 1)
            ) {
              this.style.backgroundColor = "orange";
            } else {
              this.style.backgroundColor = "green";
            }
          }
        }
      }
      resetButton.addEventListener("click", () => {
        board.innerHTML = "";
        statusDisplay.innerHTML = "";
        movementDisplay.innerHTML = 0;
        statusDisplay.style.color = "";
        startGame();
      });
    }
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
