export default class Modal {
  constructor(openButton, closeButton, container) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.container = document.querySelector(container);
    this.activeClass = "active";
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModalOut = this.closeModalOut.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.container.classList.toggle(this.activeClass);
  }

  closeModalOut(event) {
    if (event.target === this.container) {
      this.toggleModal(event);
    }
  }

  addEvent() {
    this.openButton.addEventListener("click", this.toggleModal);
    this.closeButton.addEventListener("click", this.toggleModal);
    this.container.addEventListener("click", this.closeModalOut);
  }

  init() {
    if (this.openButton && this.closeButton && this.container) {
      this.addEvent();
    }
  }
}
