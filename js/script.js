// DOM ELEMENTS
const cardsElm = document.querySelector(".row")
const imgElm = document.querySelector(".img-fluid")
const overlayElm = document.querySelector(".overlay")
const overlayImgElm = document.querySelector(".overlay-img")

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
                        <img class="img-fluid" src="${card.url}" alt="foto ${i + 1}">
                    </div>
                    <div class="card-desc">
                        <span class="description">${card.title}</span><br>
                    </div>
                </div>`;
        }
    
    const postCards = document.querySelectorAll(".col")

    postCards.forEach((postCard) => {
        postCard.addEventListener("click", () => {
            const urlImg = postCard.querySelector(".img-fluid").src;
            overlayElm.classList.remove("hidden");
            overlayElm.innerHTML = 
                `<button id="overlay-img-btn">Chiudi</button>
                <img class="overlay-img" src="${urlImg}" alt="">`;

            const overlayBtnElm = document.getElementById("overlay-img-btn");
            overlayBtnElm.addEventListener("click", function() {
                overlayElm.classList.add("hidden");
            });
        });
    });
})