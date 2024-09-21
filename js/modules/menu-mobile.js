import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];
  const activeClass = "active";

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add(activeClass);
      menuButton.classList.add(activeClass);

      outsideClick(menuList, events, () => {
        menuList.classList.remove(activeClass);
        menuButton.classList.remove(activeClass);
      });
    }

    events.forEach((element) => {
      menuButton.addEventListener(element, openMenu);
    });
  }
}
