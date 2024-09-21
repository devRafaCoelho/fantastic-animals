const initModal = () => {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const container = document.querySelector('[data-modal="container"]');
  const activeClass = "active";

  if (openButton && closeButton && container) {
    function toggleModal(event) {
      event.preventDefault();
      container.classList.toggle(activeClass);
    }

    function closeModalOut(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    container.addEventListener("click", closeModalOut);
  }
};

export default initModal;
