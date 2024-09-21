const initTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const handleMouseOver = (event) => {
    const tooltipBox = createTooltip(event.currentTarget);

    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    handleMouseLeave.tooltipBox = tooltipBox;
    handleMouseLeave.element = event.currentTarget;
    event.currentTarget.addEventListener("mouseleave", handleMouseLeave);

    handleMouseMove.tooltipBox = tooltipBox;
    event.currentTarget.addEventListener("mousemove", handleMouseMove);
  };

  const createTooltip = (element) => {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  const handleMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", handleMouseLeave);
      this.element.removeEventListener("mousemove", handleMouseMove);
    },
  };

  const handleMouseMove = {
    tooltipBox: "",
    element: "",
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((element) => {
    element.addEventListener("mouseover", handleMouseOver);
  });
};

export default initTooltip;
