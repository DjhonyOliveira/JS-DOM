const init = document.querySelector('#init')
const span = document.querySelectorAll('span')


let playersGame = []

init.addEventListener('click', function(ev){
    ev.preventDefault()

    // Player One
    const playerOne = document.getElementById('player-one').value
    const peao1 = document.querySelector('.player1 .peao-player .peao:checked').value

    // Player Two
    const playerTwo = document.getElementById('player-two').value
    const peao2 = document.querySelector('.player2 .peao-player .peao:checked').value

    if (peao1.length = 2){
        alert('Selecione apenas um peão por jogador!!')
    } else if (peao2.length = 2) {
        alert('Selecione apenas um peão por jogador!!')
    }

    // push array
    playersGame.push({playerOne, peao1}, {playerTwo, peao2})
})


span.forEach(function(quadro){
    quadro.addEventListener('click', function(){

        if (playersGame.length < 2){
            alert("Adicione Jogadores para começar a Jogar!!")
        }


        
    })
})



