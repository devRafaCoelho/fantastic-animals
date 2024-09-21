import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, events, () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, handleClick);
    });
  });
}
