export default class Modal {
  constructor(openButton, closeButton, container) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.container = document.querySelector(container);
    this.activeClass = "active";
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.closeModalOut = this.closeModalOut.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle(this.activeClass);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  closeModalOut(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  addEvent() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.closeModalOut);
  }

  init() {
    if (this.openButton && this.closeButton && this.container) {
      this.addEvent();
    }
  }
}
