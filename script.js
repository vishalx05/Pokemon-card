async function pokemon() {
    const response = await fetch('https://dummyapi.online/api/pokemon');
    const data = await response.json();
console.log(data);
    const cardContainer = document.getElementById('card-container');

    for (const ele of data) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('col-md-3')

        card.innerHTML = `
            <img src="${ele.image_url}" class="card-img-top" alt="${ele.pokemon}" id="imghei">
            <div class="card-body">
                <h1 class="card-title">${ele.pokemon}</h1>
                <p class="card-text">Type: ${ele.type}</p>
                <p class="card-text">evolutions: ${ele.evolutions}</p>
                <p class="card-text">location: ${ele.location.split(',')[0].trim()}</p>








            </div>
        `;
        cardContainer.appendChild(card);
    }
}

pokemon();
