var playersRostered = []

function addPlayer() {
    const players = document.getElementById("newPlayers")

    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')
    h3.innerText = "Jogador"

    // nome do jogador
    const playerName = document.createElement('li')
    playerName.innerHTML = '<label for="namePlayer">Nome: </label>'

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'namePlayer'
    nameInput.id = 'namePlayer'

    playerName.appendChild(nameInput)

    ul.appendChild(playerName)
    ul.appendChild(document.createElement('hr'))


    // posição do jogador
    const positionPlayer = document.createElement('li')
    positionPlayer.innerHTML = '<label for="positionPlayer">Posição: </label>'

    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.name = 'positionPlayer'
    positionInput.id = 'positionPlayer'

    positionPlayer.appendChild(positionInput)

    ul.appendChild(positionPlayer)
    ul.appendChild(document.createElement('hr'))


    // numero da camisa do jogador
    const shirtNumberPlayer = document.createElement('li')
    shirtNumberPlayer.innerHTML = '<label for="shirtNumber">N° Camisa: </label>'

    const numberInput = document.createElement('input')
    numberInput.type = 'number'
    numberInput.name = 'shirtNumber'
    numberInput.id = 'shirtNumber'

    shirtNumberPlayer.appendChild(numberInput)

    ul.appendChild(shirtNumberPlayer)
    ul.appendChild(document.createElement('hr'))

    // botão confirmação
    const buttonConfirm = document.createElement('button')
    buttonConfirm.innerText = 'Escalar'
    buttonConfirm.className = 'confirmPlayer'
    buttonConfirm.onclick = function() {
        
        const name = document.getElementById('namePlayer').value
        const position = document.getElementById('positionPlayer').value
        const number = document.getElementById('shirtNumber').value

        const confirPlayer = {}
        confirPlayer.nome = name
        confirPlayer.posicao = position
        confirPlayer.numeroCamisa = number

        playersRostered.push(confirPlayer)

    }

    // botão recusar
    const buttonRefuse = document.createElement('button')
    buttonRefuse.innerText = 'Recusar'
    buttonRefuse.className = 'refusePlayer'
    buttonRefuse.onclick = function() {

        const name = document.getElementById('namePlayer')
        const position = document.getElementById('positionPlayer')
        const number = document.getElementById('shirtNumber')

        name.value = ''
        position.value = ''
        number.value = ''
    }

    // inserção dos botões
    ul.appendChild(buttonConfirm)
    ul.appendChild(buttonRefuse)
    
    // inserção dumentos no HTML
    players.append(h3, ul)
}

function players() {
    const jogadores = document.getElementById('players')

    for(i = 0; i < playersRostered.length; i++){
        var players = (
            '<div class="namePlayer"><p>Nome Jogador: ' + playersRostered[i].nome + '</p></div>' + 
            '<div class="positionPlayer"><p>Posição Jogador: ' + playersRostered[i].posicao + '</p></div>' +
            '<div class="numberPlayer"><p>N° Camisa: ' + playersRostered[i].numeroCamisa + '</p></div>'
        )
    }

    jogadores.innerHTML = players
}