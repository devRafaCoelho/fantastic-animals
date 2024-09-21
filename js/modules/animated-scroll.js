export default class AnimatedScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.activeClass = "active";
    this.handleCheckDistance = this.handleCheckDistance.bind(this);
  }

  handleGetSectionsDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  handleCheckDistance() {
    this.distance.forEach((element) => {
      if (window.pageYOffset > element.offset) {
        element.section.classList.add(this.activeClass);
      } else if (element.section.classList.contains(this.activeClass)) {
        element.section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.handleGetSectionsDistance();
    this.handleCheckDistance();
    window.addEventListener("scroll", this.handleCheckDistance);
    return this;
  }
}
