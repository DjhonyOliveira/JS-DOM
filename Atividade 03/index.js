const init = document.querySelector('#init')
const span = document.querySelectorAll('span')
const nextPlayer = document.querySelector('.next-player')


let playersGame = []

init.addEventListener('click', function(ev){
    ev.preventDefault()

    // Player One
    const playerOne = document.getElementById('player-one').value
    const peao1 = document.querySelector('.player1 .peao-player .peao:checked').value

    // Player Two
    const playerTwo = document.getElementById('player-two').value
    const peao2 = document.querySelector('.player2 .peao-player .peao:checked').value

    // push array
    playersGame.push({playerOne, peao1}, {playerTwo, peao2})

    if (playersGame.length >= 2) {
        if (playersGame[0].peao1 == 'X') {
            nextPlayer.value =playersGame[0].playerOne
        } else {
            nextPlayer.value = playersGame[1].playerTwo
        }
    }
});

span.forEach(function(quadro){

    quadro.addEventListener('click', function(){

        if (playersGame.length < 2){
            alert("Adicione Jogadores para começar a Jogar!!")
        }

        if (nextPlayer.value === playersGame[0].playerOne){
            quadro.innerText = playersGame[0].peao1
            quadro.style.color = '#ff0000'
            nextPlayer.value = playersGame[1].playerTwo
        } else {
            quadro.innerText = playersGame[1].peao2
            quadro.style.color = '#0000ff'
            nextPlayer.value = playersGame[0].playerOne
        }
       
    })
});



