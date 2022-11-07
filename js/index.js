function playersName(playerId){
    const playerIdField = document.getElementById(playerId);
    const playerName = playerIdField.innerText;
    return playerName;
}

function btn(btnId, playerName){
    document.getElementById(btnId).addEventListener('click',function(){
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');

        const list = document.querySelectorAll('li');
        const length = list.length;
        console.log(length);
        if(length < 5){
            playerList.appendChild(li);
            li.innerText = playersName(playerName);
        }
        else{
            alert('You can not select more than 5 players');
        }
    })
}

btn('btn-messi','messi');
btn('btn-neymar','neymar');
btn('btn-mbappe','mbappe');
btn('btn-vitor','vitor');
btn('btn-ramos','ramos');
btn('btn-renato', 'renato');

btn('btn-messi1','messi1');
btn('btn-neymar1','neymar1');
btn('btn-mbappe1','mbappe1');
btn('btn-vitor1','vitor1');
btn('btn-ramos1','ramos1');
btn('btn-renato1', 'renato1');