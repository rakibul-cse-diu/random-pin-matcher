// generate pin
const generatePinBtn = document.querySelector(".generate-btn");
const numBtn = document.querySelectorAll(".button");

generatePinBtn.addEventListener("click", () => {
    const displayPin = document.getElementById("generateDis");
    let randomNumber = Math.floor((Math.random() * (9999 - 1000 + 1)) + 9999);
    displayPin.value = randomNumber;
})


// input pin
numBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const triggredBtn = e.target.innerText;
        console.log(triggredBtn);
    });
})