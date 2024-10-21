document.addEventListener('DOMContentLoaded', function() {
    document.title = "JavaScript Apps - Card Game";
    const drawCard = document.getElementById("drawCard");
    const cardContainer = document.getElementById("cardContainer");

    drawCard.addEventListener("click", function() {
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const cardImageUrl = data.cards[0].image;
                cardContainer.innerHTML = '';
                const cardImage = document.createElement('img');
                cardImage.src = cardImageUrl;
                cardImage.alt = "Card";
                cardContainer.appendChild(cardImage);
            })
            .catch(error => {
                console.error("An error occurred:", error);
            });
    });
});