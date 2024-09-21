export default class AnimatedNumbers {
  constructor(numbers, observerTarget) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  incremetNumber(number) {
    const total = number.innerText;
    const increment = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animatedNumbers() {
    this.numbers.forEach((element) => this.incremetNumber(element));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      this.observer.disconnect();
      this.animatedNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
