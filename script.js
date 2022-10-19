const rollAdvice = document.querySelector(".roll-advice");
const adviceId = document.querySelector(".advice-id");
const activeAdvice = document.querySelector(".advice");

const getAdvice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerText = `#${data.slip.id}`;
      activeAdvice.innerText = `"${data.slip.advice}"`;
    })
    .catch((error) => console.log(error));
};

rollAdvice.addEventListener("click", getAdvice);
