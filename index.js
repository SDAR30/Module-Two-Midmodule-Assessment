
const diceImages = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]


const rollDice = document.querySelector("#dice-form");
const dicePara = document.querySelector("#dice-para");
const sumPara = document.querySelector("#sum-para");


rollDice.addEventListener("submit", (e) => {
    e.preventDefault();
    const diceInput = document.querySelector("#dice-input").valueAsNumber;
    let nums = []
    let total = 0;
    let str = "";
    for (let i = 0; i < diceInput; i++) {
        let diceRoll = Math.ceil(Math.random() * 6)
        nums.push(diceRoll)
        str += diceImages[diceRoll - 1]
        total += diceRoll
    }
    dicePara.style.fontSize = "xx-large"
    dicePara.textContent = str
    sumPara.textContent = `Sum = ${total}`

});

