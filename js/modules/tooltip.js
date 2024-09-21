export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);

    this.tooltipBox.style.top = `${event.pageY}px`;
    this.tooltipBox.style.left = `${event.pageX}px`;

    currentTarget.addEventListener("mouseleave", this.handleMouseLeave);
    currentTarget.addEventListener("mousemove", this.handleMouseMove);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  handleMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";

    event.pageX + 240 > window.innerWidth
      ? (this.tooltipBox.style.left = event.pageX - 150 + "px")
      : (this.tooltipBox.style.left = event.pageX + 20 + "px");
  }

  handleMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.handleMouseLeave);
    currentTarget.removeEventListener("mousemove", this.handleMouseMove);
  }

  addEvent() {
    this.tooltips.forEach((element) => {
      element.addEventListener("mouseover", this.handleMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addEvent();
    }
    return this;
  }
}
