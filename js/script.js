// DOM ELEMENTS
const cardsElm = document.querySelector(".row")
const imgElm = document.querySelector(".img-fluid")

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (res) {
        const newCard = res.data; 
        for (let i = 0; i < newCard.length; i++) {
            const card = newCard[i];
            cardsElm.innerHTML += 
                `<div class="col card">
                    <div>
                        <img class="pin-card" src="img/pushpin.svg" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="${card.url}" alt="prodotto ${i + 1}">
                    </div>
                    <div class="card-desc">
                        <span class="description">${card.title}</span><br>
                    </div>
                </div>`;
    }
})
    