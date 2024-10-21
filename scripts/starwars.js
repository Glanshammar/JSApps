$(function() {
    document.title = "JavaScript Apps - Star Wars Biometrics";

    const characterName = document.getElementById('characterName');
    const searchButton = document.getElementById('searchButton');
    const output = document.getElementById('output');

    function getCharacter() {
        const name = characterName.value;
        const fullUri = `https://www.swapi.tech/api/people/?name=${name}`;

        fetch(fullUri)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.result && data.result.length > 0) {
                    const character = data.result[0].properties;
                    const biometrics = `
                        Height: ${character.height}cm
                        Weight: ${character.mass}kg
                        Gender: ${character.gender}
                        Hair Color: ${character.hair_color}
                    `;
                    output.value = biometrics;
                } else {
                    output.value = "Character couldn't be found";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                output.value = "An error occurred while searching";
            });
    }

    searchButton.addEventListener('click', getCharacter);

    characterName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getCharacter();
        }
    });
});