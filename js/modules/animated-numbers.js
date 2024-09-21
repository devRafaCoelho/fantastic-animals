export default function initAnimatedNumbers() {
  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });

  function animatedNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((element) => {
      const total = element.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        element.innerText = start;
        if (start > total) {
          element.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animatedNumbers();
    }
  }
}
