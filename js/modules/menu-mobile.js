import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = ["click", "touchstart"];
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.events.forEach((element) => {
      this.menuButton.addEventListener(element, this.openMenu);
    });
  }

  init() {
    this.addEvent();
    return this;
  }
}
