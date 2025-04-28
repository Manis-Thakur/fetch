fetchdata();

async function fetchdata() {

    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!Response.ok) {
            throw new Error("could not find");
        }
        const data = await Response.json();
        const pokemonSprites = data.sprites.front_default;
        const image = document.getElementById('pokemonImg');

        image.src = pokemonSprites;
        image.style.display = "block";


    } catch (error) {
        console.log(error);
    }
}
