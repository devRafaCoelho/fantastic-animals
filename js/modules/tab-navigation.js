const initTabNavigation = () => {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    const handleActiveTab = (index) => {
      tabContent.forEach((element) => {
        element.classList.remove(activeClass);
      });

      tabContent[index].classList.add(activeClass);
    };

    tabMenu.forEach((element, index) => {
      element.addEventListener("click", () => {
        handleActiveTab(index);
      });
    });
  }
};

export default initTabNavigation;
