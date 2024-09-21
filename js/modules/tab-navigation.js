export default class TabNavigation {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = "active";
  }

  handleActiveTab(index) {
    this.tabContent.forEach((element) => {
      element.classList.remove(this.activeClass);
    });

    this.tabContent[index].classList.add(this.activeClass);
  }

  addEvent() {
    this.tabMenu.forEach((element, index) => {
      element.addEventListener("click", () => this.handleActiveTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.handleActiveTab(0);
      this.addEvent();
    }
  }
}
