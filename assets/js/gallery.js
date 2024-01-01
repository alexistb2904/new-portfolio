const photosGallery = document.querySelectorAll(".photo-gallery div:last-of-type img");

photosGallery.forEach((photo) => {
  photo.addEventListener("click", () => {
    const img = photo.getAttribute("src");
    const modal = document.createElement("div");
    modal.classList.add("modal-gallery");
    const imgModal = document.createElement("img");
    imgModal.setAttribute("src", img);
    modal.appendChild(imgModal);
    const close = document.createElement("div");
    close.classList.add("close");
    close.classList.add("button-action-red");
    const closeA = document.createElement("a");
    closeA.innerHTML = "Fermer";
    close.appendChild(closeA);
    modal.appendChild(close);
    document.body.appendChild(modal);

    close.addEventListener("click", () => {
      modal.remove();
    });
  });
});
