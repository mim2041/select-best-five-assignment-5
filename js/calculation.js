document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerAmount = perPlayerField.value;

    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    // playerList.appendChild(li);
    const list = playerList.querySelectorAll("li");
    const noOfPlayer = list.length;
    
    const totalAmount = noOfPlayer * perPlayerAmount;

    const expenseAmount = document.getElementById('expense-amount');
    expenseAmount.innerText = totalAmount;
})

document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerField = document.getElementById('manager-field');
    const managerPrice = parseFloat(managerField.value);
    const coachField = document.getElementById('coach-field');
    const coachPrice = parseFloat(coachField.value);
    const expenseAmount = document.getElementById('expense-amount');
    const playerExpense = parseFloat(expenseAmount.innerText);

    const total = managerPrice + coachPrice + playerExpense;
    const totalAmountField = document.getElementById('total-amount');
    totalAmountField.innerText = total;
})