document.getElementById('select-player').addEventListener('click',function(event){
    const selectButton = event.target;
    
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');

    li.innerText = playerNames('messi');
    // selectButton = playerList.appendChild(li);
    li.innerText = playerNames('neymar');
    // selectButton = playerList.appendChild(li);
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
    // appendChildLi();
    selectButton = playerList.appendChild(li);
})

function playerNames(playerId){
    const playerIdField = document.getElementById(playerId);
    const playerNames = playerIdField.innerText;

    return playerNames;
}

function appendChildLi(){
    
    return playerList.appendChild(li);
}
