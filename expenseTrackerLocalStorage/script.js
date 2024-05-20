const list = document.querySelector('.list');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const balance = document.getElementById('balance');
const submitBtn = document.getElementById('submit');
const enteredText = document.getElementById('text');
const enteredAmount = document.getElementById('amount');

// Get transactions from local storage or initialize an empty array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Remove transaction on button click
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    addTransactionDOM(transactions);
}

// Update local storage with current transactions
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update DOM with new data 
function updateDOM() {
    const amounts = transactions.map(transaction => transaction.amount);
    const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalIncome = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalExpense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    balance.innerText = `₹${totalBalance}`;
    income.innerText = `₹${totalIncome}`;
    expense.innerText = `₹${totalExpense}`;
}

// Add transactions to DOM
function addTransactionDOM(transaction) {
    list.innerHTML = '';

    transaction.forEach(t => {
        const sign = t.amount > 0 ? '+' : '-';
        const plusOrMinus = t.amount > 0 ? 'plus' : 'minus';
        const item = document.createElement('li');
        item.classList.add(plusOrMinus);
        item.innerHTML = `
            ${t.text}<span>${sign}${Math.abs(t.amount)}</span> <button class="delete-btn" onclick="removeTransaction(${t.id})">x</button>
        `;
        list.appendChild(item);
    });

    updateDOM(transaction);
}

// Generate random id
function getId() {
    return Math.floor(Math.random() * 100000);
}

// Add transaction details
function addTransaction(e) {
    e.preventDefault();
    if (enteredText.value.trim() === "" || enteredAmount.value.trim() === "") {
        alert('Please enter valid data');
    } else {
        const transaction = {
            id: getId(),
            text: enteredText.value,
            amount: +enteredAmount.value
        };
        transactions.push(transaction);
        updateLocalStorage();
        addTransactionDOM(transactions);
        enteredText.value = "";
        enteredAmount.value = "";
    }
}

// Add transactions individually
submitBtn.addEventListener('click', addTransaction);

// Add transactions to DOM
addTransactionDOM(transactions);
