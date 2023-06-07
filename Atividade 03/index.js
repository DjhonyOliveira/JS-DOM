const init = document.querySelector('#init')
const reboot = document.querySelector('#reboot')
const span = document.querySelectorAll('span')
const nextPlayer = document.querySelector('.next-player')
let playersGame = []

// Reboot game
reboot.addEventListener('click', function(ev){
    ev.preventDefault()

    const quadro1 = document.querySelector("#quadro1").innerText = ''
    const quadro2 = document.querySelector("#quadro2").innerText = ''
    const quadro3 = document.querySelector("#quadro3").innerText = ''
    const quadro4 = document.querySelector("#quadro4").innerText = ''
    const quadro5 = document.querySelector("#quadro5").innerText = ''
    const quadro6 = document.querySelector("#quadro6").innerText = ''
    const quadro7 = document.querySelector("#quadro7").innerText = ''
    const quadro8 = document.querySelector("#quadro8").innerText = ''
    const quadro9 = document.querySelector("#quadro9").innerText = ''

    quadro1.value = ''
    quadro2.value = ''
    quadro3.value = ''
    quadro4.value = ''
    quadro5.value = ''
    quadro6.value = ''
    quadro7.value = ''
    quadro8.value = ''
    quadro9.value = ''

    playersGame.length = 0


})

// formulário
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

    // validação de primeiro jogador
    if (playersGame.length >= 2) {
        if (playersGame[0].peao1 == 'X') {
            nextPlayer.value =playersGame[0].playerOne
        } else {
            nextPlayer.value = playersGame[1].playerTwo
        }
    } else {
        alert('Faltam jogadores a serem cadastrados!!!')
    }
});

// Tabuleiro - jogadas
span.forEach(function(quadro){
    quadro.addEventListener('click', function(){

        // validação inicio game
        if (playersGame.length < 2){
            alert("Adicione Jogadores para começar a Jogar!!")
        }

        // Sequencia de Jogadores
        if (nextPlayer.value === playersGame[0].playerOne){
            quadro.innerText = playersGame[0].peao1
            // quadro.value = playersGame[0].peao1
            quadro.style.color = '#ff0000'
            nextPlayer.value = playersGame[1].playerTwo
        } else {
            quadro.innerText = playersGame[1].peao2
            // quadro.value = playersGame[1].peao2
            quadro.style.color = '#0000ff'
            nextPlayer.value = playersGame[0].playerOne
        }
    })
});

// Validação do vencedor
span.forEach(function(victory){
    victory.addEventListener('click', function(){
        const quadro1 = document.querySelector("#quadro1")
        const quadro2 = document.querySelector("#quadro2")
        const quadro3 = document.querySelector("#quadro3")
        const quadro4 = document.querySelector("#quadro4")
        const quadro5 = document.querySelector("#quadro5")
        const quadro6 = document.querySelector("#quadro6")
        const quadro7 = document.querySelector("#quadro7")
        const quadro8 = document.querySelector("#quadro8")
        const quadro9 = document.querySelector("#quadro9")

        // timeOut para atraso no preenchimento dos campos vencedores
        setTimeout(()=> {
            if (quadro1.value == 'X' && quadro2.value == 'X' && quadro3.value == 'X' || quadro1.value == 'O' && quadro2.value == 'O' && quadro3.value == 'O') {
                quadro1.style.color = '#4ab337'
                quadro2.style.color = '#4ab337'
                quadro3.style.color = '#4ab337'
                if (quadro1.value == playersGame[0].peao1 ){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro4.value == 'X' && quadro5.value == 'X' && quadro6.value == 'X' || quadro4.value == 'O' && quadro5.value == 'O' && quadro6.value == 'O'){
                quadro4.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro6.style.color = '#4ab337'
                if (quadro4.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro7.value == 'X' && quadro8.value == 'X' && quadro9.value == 'X' || quadro7.value == 'O' && quadro8.value == 'O' && quadro9.value == 'O') {
                quadro7.style.color = '#4ab337'
                quadro8.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro7.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro1.value == 'X' && quadro4.value == 'X' && quadro7.value == 'X' || quadro1.value == 'O' && quadro4.value == 'O' && quadro7.value == 'O'){
                quadro1.style.color = '#4ab337'
                quadro4.style.color = '#4ab337'
                quadro7.style.color = '#4ab337'
                if (quadro1.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro2.value == 'X' && quadro5.value == 'X' && quadro8.value == 'X' || quadro2.value == 'O' && quadro5.value == 'O' && quadro8.value == 'O'){
                quadro2.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro8.style.color = '#4ab337'
                if (quadro2.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro3.value == 'X' && quadro6.value == 'X' && quadro9.value == 'X' || quadro3.value == 'O' && quadro6.value == 'O' && quadro9.value == 'O'){
                quadro3.style.color = '#4ab337'
                quadro6.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro3.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro1.value == 'X' && quadro5.value == 'X' && quadro9.value == 'X' || quadro1.value == 'O' && quadro5.value == 'O' && quadro9.value == 'O'){
                quadro1.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro9.style.color = '#4ab337'
                if (quadro1.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            } else if (quadro3.value == 'X' && quadro5.value == 'X' && quadro7.value == 'X' || quadro3.value == 'O' && quadro5.value == 'O' && quadro7.value == 'O'){
                quadro3.style.color = '#4ab337'
                quadro5.style.color = '#4ab337'
                quadro7.style.color = '#4ab337'
                if (quadro3.value == playersGame[0].peao1){
                    alert('Vencedor: ' + playersGame[0].playerOne)
                } else {
                    alert('Vencedor: ' + playersGame[1].playerTwo)
                }
            }
        },200)
    })
})