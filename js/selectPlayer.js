function playerNames(playerId){
    const playerIdField = document.getElementById(playerId);
    const playerNames = playerIdField.innerText;
    return playerNames;
}

function addToList(playerName){
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    
    const list = playerList.querySelectorAll("li");
    const noOfPlayer = list.length;
    console.log(noOfPlayer);
    if(noOfPlayer < 5){
        playerList.appendChild(li);
        li.innerText = playerNames(playerName);
    }
    else{
        alert('You can not select more than 5 players');
    }
    
}

function selectPlayer(playerId, btnId){
    document.getElementById(btnId).addEventListener('click',function(){
        addToList(playerId);
    })
}
selectPlayer('messi','btn-messi');
selectPlayer('neymar','btn-neymar');
selectPlayer('mbappe','btn-mbappe');
selectPlayer('vitor','btn-vitor');
selectPlayer('ramos','btn-ramos');
selectPlayer('renato','btn-renato');

selectPlayer('messi1','btn-messi1');
selectPlayer('neymar1','btn-neymar1');
selectPlayer('mbappe1','btn-mbappe1');
selectPlayer('vitor1','btn-vitor1');
selectPlayer('ramos1','btn-ramos1');
selectPlayer('renato1','btn-renato1');