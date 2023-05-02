let dev = []

const buttonTechnology = document.querySelector('.technology')

buttonTechnology.addEventListener('click', function(ev){
    // ev.defaultPrevented()

    const br = document.createElement('br')
    const technologis = document.querySelector('.technologies')

    const divLanguage = document.createElement('div')
    divLanguage.className = 'languages'

    const divTime = document.createElement('div')
    divTime.className = 'experience'

    // input text
    const input = document.createElement('input')
    input.placeholder = 'Linguagem'
    input.type = 'text'
    input.className = 'language'
    
    // Input radio 01 + label
    const label1 = document.createElement('label')
    label1.setAttribute('for', 'radio1')
    label1.textContent = '0 - 2 Anos'
    
    const inputRadio1 = document.createElement('input')
    inputRadio1.type = 'radio'
    inputRadio1.id = 'radio1'
    inputRadio1.value = '0 - 2 Anos'

    // Input radio 02 + label
    const label2 = document.createElement('label')
    label2.setAttribute('for', 'radio2')
    label2.textContent = '3 - 5 Anos'
    
    const inputRadio2 = document.createElement('input')
    inputRadio2.type = 'radio'
    inputRadio2.id = 'radio2'
    inputRadio2.value = '3 - 5 Anos'

    // Input radio 03 + label
    const label3 = document.createElement('label')
    label3.setAttribute('for', 'radio3')
    label3.textContent = '5 + Anos'
    
    const inputRadio3 = document.createElement('input')
    inputRadio3.type = 'radio'
    inputRadio3.id = 'radio3'
    inputRadio3.value = '5 + Anos'
    
    // inseção no HTML

    label1.appendChild(inputRadio1)
    label2.appendChild(inputRadio2)
    label3.appendChild(inputRadio3)
    
    divLanguage.appendChild(input)
    divTime.appendChild(label1)
    divTime.appendChild(label2)
    divTime.appendChild(label3)


    technologis.appendChild(br)
    technologis.appendChild(divLanguage)
    technologis.appendChild(divTime)

})