document.getElementById('select-player').addEventListener('click',function(event){
    const selectButton = document.getElementById('btn-select');
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');

    li.innerText = playerNames('messi');
    li.innerText = playerNames('neymar');
    li.innerText = playerNames('mbappe');
    li.innerText = playerNames('vitor');
    li.innerText = playerNames('ramos');
    li.innerText = playerNames('renato');
    li.innerText = playerNames('messi1');
    li.innerText = playerNames('neymar1');
    li.innerText = playerNames('mbappe1');
    li.innerText = playerNames('vitor1');
    li.innerText = playerNames('ramos1');
    li.innerText = playerNames('renato1');

    playerList.appendChild(li);
})

function playerNames(playerId){
    const playerIdField = document.getElementById(playerId);
    const playerNames = playerIdField.innerText;
    return playerNames;
}
