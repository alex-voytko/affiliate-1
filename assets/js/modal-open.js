const refs = {
  swiperSlide: document.querySelector(".js-portfolio-swiper"),
  modal: document.querySelector("#modal-backdrop"),
  closeModalBtn: document.querySelector(".close-btn"),
};

refs.swiperSlide.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  if (!e.target.closest(".portfolio-item")) return;
  const clickedImg = e.target.closest(".portfolio-item").firstElementChild;
  refs.modal.classList.add("is-visible");
  refs.modal.firstElementChild.insertAdjacentHTML(
    "beforeend",
    `<img src="${clickedImg.dataset.link || clickedImg.src}" alt="${
      clickedImg.alt
    }" style="width: 100%" />`,
  );

  refs.closeModalBtn.addEventListener("click", onCloseModalBtnClick);
  refs.modal.addEventListener("click", onModalClick);
}

function onModalClick(e) {
  if (e.target !== e.currentTarget) return;
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}
function onCloseModalBtnClick() {
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}
