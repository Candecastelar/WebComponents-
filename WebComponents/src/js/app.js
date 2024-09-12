document.addEventListener('DOMContentLoaded', function(){

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {

        console.log(data.results)

        const personajes = data.results

        const ulpersonaje = document.createElement('ul');
        ulpersonaje.classList.add('ul-personaje')

        document.body.appendChild(ulpersonaje)

        personajes.forEach(personaje => {

            const listItem = document.createElement('li')
            const card = document.createElement('card-personaje')

            listItem.appendChild(card)

            ulpersonaje.appendChild(listItem)

            card.querySelector('.img-personaje').src = personaje.image
            card.querySelector('.name').textContent = personaje.name
            card.querySelector('.status').textContent = 'Estado: ' + personaje.status
            card.querySelector('.specie').textContent = 'Especie: ' + personaje.species
            
        })
    })
})