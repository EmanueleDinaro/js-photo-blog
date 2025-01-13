// DOM ELEMENTS
const cardsElm = document.querySelector(".row")
const imgElm = document.querySelector(".img-fluid")
const overlayElm = document.querySelector(".overlay")
const overlayImgElm = document.querySelector(".overlay-img")

// Fetch tramite AXIOS per ottenere dati da un API
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (res) {
    const newCard = res.data;

    // ITERAZIONE e RENDER tramite ciclo for o metodo forEach su ciascun elemento dei dati ricevuti per creare le "card"
    newCard.forEach((card, i) => {
        cardsElm.innerHTML += 
            `<div class="col card">
                <div>
                    <img class="pin-card" src="img/pushpin.svg" alt="">
                </div>
                <div>
                    <img class="img-fluid" src="img/600x600.jpg" alt="foto ${i + 1}">
                </div>
                <div class="card-desc">
                    <span class="description">${card.title}</span><br>
                </div>
            </div>`;
    });
       
    // ASSEGNAZIONE ad una const di tutte le "card" generate
    const postCards = document.querySelectorAll(".col");
    
    // EventListener al click di ogni "card" che fa aprire l'overlay tramite rimozione classe hidden
    postCards.forEach((postCard) => {
        postCard.addEventListener("click", () => {
            // ASSEGNAZIONE ad urlImg il src della classe .img-fluid
            // che può essere o il placeholder dell'api o l'img di default (mia)
            const urlImg = postCard.querySelector(".img-fluid").src;
            overlayElm.classList.remove("hidden");
            
            overlayElm.innerHTML = 
                `<button id="overlay-img-btn">Chiudi</button>
                <img class="overlay-img" src="${urlImg}" alt="">`;

            const overlayBtnElm = document.getElementById("overlay-img-btn");

            // EventListener al click del bottone che fa chiudere l'overlay tramite aggiunta classe hidden
            overlayBtnElm.addEventListener("click", function() {
                overlayElm.classList.add("hidden");
            });
        });
    });
});
