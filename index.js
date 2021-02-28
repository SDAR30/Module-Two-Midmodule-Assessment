
const diceImages = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
let totalDiceRolls = 0;

const rollDice = document.querySelector("#dice-form");
const dicePara = document.querySelector("#dice-para");
const sumPara = document.querySelector("#sum-para");


const addToHistory = () => {
    let li = document.createElement("li")

    li.textContent = dicePara.textContent + "=" + sumPara.textContent.slice(5);
    let list = document.querySelector("#history-list")
    list.appendChild(li)
}


rollDice.addEventListener("submit", (e) => {
    e.preventDefault();

    if (totalDiceRolls > 0) {
        addToHistory();
    }

    totalDiceRolls++;
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

