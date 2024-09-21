import AnimatedNumbers from "./animated-numbers.js";

export default function initFetchAnimals() {
  async function fecthAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const gridNumbers = document.querySelector(".grid-numbers");

      animalsJSON.forEach((element) => {
        const divAnimalData = createAnimal(element);
        gridNumbers.appendChild(divAnimalData);
      });

      const animatedNumbers = new AnimatedNumbers("[data-number]", ".numbers");
      animatedNumbers.init();
    } catch (error) {
      console.error("Error when fetching data:", error);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");

    const h3 = document.createElement("h3");
    h3.textContent = animal.specie;

    const span = document.createElement("span");
    span.setAttribute("data-number", "");
    span.textContent = animal.total;

    div.appendChild(h3);
    div.appendChild(span);

    return div;
  }

  fecthAnimals("../../animalsAPI.json");
}
