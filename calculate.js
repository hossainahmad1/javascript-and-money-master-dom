// input field function
function getTextValueById(inputFieldId) {
    const inputName = document.getElementById(inputFieldId);
    const inputNamestring = inputName.value;
    const inputNameValue = parseFloat(inputNamestring);
    return inputNameValue;
}

// length check function
function checkLength(inputId) {
    const check = document.getElementById(inputId);
    const liLengths = check.children.length;
    return liLengths;
    
}
// player button disabled click
function playerClick(clicks) {
    const btnClick = document.getElementById(clicks);
    const btnClicks = btnClick.setAttribute('disabled',true);
    return btnClicks;
}



// selector added player list ;
// messi selector
document.getElementById('messi-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('messi-name');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('messi-id');
});

// Ronaldinho selector
document.getElementById('ronaldinho-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('ronaldinho');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('ronaldinho-id');
});

// Dibala selector
document.getElementById('dibala-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('dibala');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('dibala-id');
});
// MBappe selector
document.getElementById('mbappe-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('mbappe');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('mbappe-id');
});

// Ronaldo selector
document.getElementById('ronaldo-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('ronaldo');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('ronaldo-id');
});

// Dimaria selector
document.getElementById('dimaria-id').addEventListener('click', function () {
    const nameFindElement = document.getElementById('dimaria');
    const nameFind = nameFindElement.innerText;
    const playerAddList = document.getElementById('player-add-list');
    checkLength('player-add-list');
    const listItem = document.createElement('li');
    listItem.innerText = nameFind;
    playerAddList.appendChild(listItem);
    playerClick('dimaria-id');
});



// calculate per Player
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player');
    const perPlayerString = perPlayer.value;
    const perPlayerValue = parseFloat(perPlayerString);
    const playerExpenses = document.getElementById('player-Expenses');
    const liLength = checkLength('player-add-list');
    const perPlayerTotal = perPlayerValue * liLength;
    playerExpenses.innerText = perPlayerTotal;

});

// calculate total amount 
document.getElementById('calculate-total').addEventListener('click', function () {
    // manager amount
    const managerValue = getTextValueById('manager')
    // coach amount
    const coachValue = getTextValueById('coach');
    // total expenses
    const playerExpenses = document.getElementById('player-Expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesElement = parseFloat(playerExpensesString);
    const calculatetotalAmount = playerExpensesElement + managerValue + coachValue;
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = calculatetotalAmount;
});



