const initAccordion = () => {
  const accordionList = document.querySelectorAll(
    '[data-animated="accordion"] dt'
  );
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const handleActiveAccordion = (event) => {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((element) => {
      element.addEventListener("click", handleActiveAccordion);
    });
  }
};

export default initAccordion;
