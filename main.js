// Selectors

const counterNumber = document.querySelector(".counter-number");
const formSubmit = document.querySelector("form");
const input = document.querySelector("input");

// Count Start
const startCount = () => {
  let intCountNumber = parseInt(counterNumber.textContent);

  // countdown starts
  setInterval(() => {
    if (input.value > 0) {
      if (intCountNumber == 0) {
        return;
      } else {
        intCountNumber--;
        counterNumber.textContent = intCountNumber;
      }
    }
  }, 1000);
};

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  counterNumber.textContent = input.value;
  startCount();
});
