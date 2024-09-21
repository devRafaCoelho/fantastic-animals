const initAnimatedScroll = () => {
  const sections = document.querySelectorAll('[data-animated="scroll"]');
  const windowHalf = window.innerHeight * 0.6;
  const activeClass = "active";

  const handleAnimatedScroll = () => {
    sections.forEach((element) => {
      const sectionTop = element.getBoundingClientRect().top - windowHalf;
      const isSectionVisible = sectionTop < 0;

      if (isSectionVisible) {
        element.classList.add(activeClass);
      } else if (element.classList.contains(activeClass)) {
        element.classList.remove(activeClass);
      }
    });
  };

  handleAnimatedScroll();
  window.addEventListener("scroll", handleAnimatedScroll);
};

export default initAnimatedScroll;
