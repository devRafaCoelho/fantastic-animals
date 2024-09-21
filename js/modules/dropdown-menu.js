import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = ["touchstart", "click"];
    this.activeClass = "active";
    this.handleActiveDropdownMenu = this.handleActiveDropdownMenu.bind(this);
  }

  handleActiveDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.dropdownMenus.forEach((element) => {
      this.events.forEach((event) => {
        element.addEventListener(event, this.handleActiveDropdownMenu);
      });
    });
  }

  init() {
    this.addEvent();
    return this;
  }
}
