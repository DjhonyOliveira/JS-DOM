const init = document.querySelector('#init')
const span = document.querySelectorAll('span')


span.forEach(function(quadro){
    quadro.addEventListener('click', function(){  
        quadro.innerText = "X"
        quadro.style.color = "#ff0000"
    })
})

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
})




