$(function() {
    document.title = "JavaScript Apps - Star Wars Biometrics";

    const $characterName = $('#characterName');
    const $searchButton = $('#searchButton');
    const $output = $('#output');

    function getCharacter() {
        const characterName = $characterName.val();
        const fullUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

        $.getJSON(fullUri)
            .done(function(data) {
                if (data.result && data.result.length > 0) {
                    const character = data.result[0].properties;
                    const biometrics = `
                        Height: ${character.height}cm
                        Weight: ${character.mass}kg
                        Gender: ${character.gender}
                        Hair Color: ${character.hair_color}
                    `;
                    $output.val(biometrics);
                } else {
                    $output.val("Character couldn't be found");
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                $output.val("An error occurred while searching");
            });
    }

    $searchButton.on('click', getCharacter);

    $characterName.on('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getCharacter();
        }
    });
});