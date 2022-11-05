document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerAmount = perPlayerField.value;

    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    playerList.appendChild(li);
    const list = playerList.querySelectorAll("li");
    const noOfPlayer = list.length;
    console.log(noOfPlayer);
    const totalAmount = noOfPlayer * perPlayerAmount;
    // console.log(totalAmount);

    const expenseAmount = document.getElementById('expense-amount');
    expenseAmount.innerText = totalAmount;
})
