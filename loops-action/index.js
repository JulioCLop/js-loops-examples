// first example: sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberElement = document.getElementById('user-number');
    const enteredNumber = userNumberElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++){

        sumUpToNumber = sumUpToNumber + i;

    }
   const outputResult = document.getElementById('calculated-sum');
   outputResult.textContent = sumUpToNumber;

   outputResult.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum )

// second example

const hightlightElementBtn = document.querySelector('#highlight-links button');

function hightlightLinks(){

    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }

}

hightlightElementBtn.addEventListener('click', hightlightLinks);

// display dummy data

const dummyUserData = {
    firstName: 'Julio',
    lastName: 'Lopez',
    age: 33
}

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputElement = document.getElementById('output-user-data');
    outputElement.innerHTML = '';

    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ": " + dummyUserData[key]
        newUserDataListItemElement.textContent = outputText;
        outputElement.append(newUserDataListItemElement)
    }
};

displayUserDataButtonElement.addEventListener('click', displayUserData);








// Statistic example - roll dice 


const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){

return Math.floor(Math.random() * 6) + 1;

};

function derivedNumberOfDiceRolls(){
const targetNumberElement = document.getElementById('user-target-number');
const rollDiceListElement = document.getElementById('dice-rolls');

const enteredNumber = targetNumberElement.value;
rollDiceListElement.innerHTML = '';

let hasRolledTargetNumber = false;
let numberOfRolls = 0;


while(!hasRolledTargetNumber){
 const rolledNumber = rollDice();
 numberOfRolls++;
 const newRollListElement = document.createElement('li');
 const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
 newRollListElement.textContent = outputText;
 rollDiceListElement.append(newRollListElement)
 hasRolledTargetNumber = rolledNumber == enteredNumber;
}

const outputTotalRollsElement = document.getElementById('output-total-rolls');
const outputTargetNumberElement = document.getElementById('output-target-number');

outputTargetNumberElement.textContent = enteredNumber;
outputTotalRollsElement.textContent = numberOfRolls;

};

rollDiceButtonElement.addEventListener('click', derivedNumberOfDiceRolls);
