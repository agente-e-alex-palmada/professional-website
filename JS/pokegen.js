document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('pokemon-button');
    const container = document.getElementById('pokemon-container');

    async function getRandomPokemon() {
        // Generate a random Pokémon ID (between 1 and 898)
        const pokemonId = Math.floor(Math.random() * 1025) + 1;

        try {
            // First request: get basic Pokémon data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data = await response.json();

            // Second request: get Pokémon species data to access generation info
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
            const speciesData = await speciesResponse.json();

            // Extract essential data
            const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const id = data.id;
            const image = data.sprites.front_default;
            const height = data.height / 10; // convert from decimetres to metres
            const weight = data.weight / 10; // convert from hectograms to kilograms
            const generation = speciesData.generation.name.replace('-', ' ').toUpperCase();

            // Build HTML for types with icons
            const types = data.types.map(typeInfo => typeInfo.type.name);
            const typeLabel = types.length === 1 ? 'Type:' : 'Types:';
            let typesHTML = '';

            types.forEach(type => {
                typesHTML += `
                    <div class="type">
                        <img src="../assets/images/icons/${type}.png" alt="${type}" title="${type}">
                        <span>${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    </div>
                `;
            });

            // Render the final Pokémon information into the container
            container.innerHTML = `
                <h2>${name} (ID: ${id})</h2>
                <img src="${image}" alt="${name}">
                <div class="info">
                    <p><strong>Height:</strong> ${height} m</p>
                    <p><strong>Weight:</strong> ${weight} kg</p>
                    <p><strong>Generation:</strong> ${generation}</p>
                <div class="types">
                    <strong>${typeLabel}</strong>
                    ${typesHTML}
                </div>
                </div>
            `;
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
            alert('There was a problem fetching the Pokémon.');
        }
    }

    // Attach click event listener to the button
    button.addEventListener('click', getRandomPokemon);
});
