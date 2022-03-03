const generatePinBtn = document.querySelector(".generate-btn");
const displayPin = document.getElementById("generateDis");
const numBtn = document.querySelectorAll(".button");
const displayInput = document.getElementById("inputDis");

// generate pin
generatePinBtn.addEventListener("click", () => {
    let randomNumber = Math.floor((Math.random() * (9999 - 1000 + 1)) + 9999);
    displayPin.value = randomNumber;
})


// input pin
numBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const triggredBtn = e.target.innerText;

        if (triggredBtn == "C") {
            displayInput.value = '';
        } else {
            displayInput.value = displayInput.value + triggredBtn;
        }

        console.log(triggredBtn);
    });
})