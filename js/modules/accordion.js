export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "active";
  }

  handleToggleAccordion(element) {
    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEvent() {
    this.accordionList.forEach((element) => {
      element.addEventListener("click", () =>
        this.handleToggleAccordion(element)
      );
    });
  }

  init() {
    if (this.accordionList.length) {
      this.handleToggleAccordion(this.accordionList[0]);
      this.addEvent();
    }
  }
}
