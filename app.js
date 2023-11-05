const nomePokemon = document.getElementById('nome-pokemon');
const numeroPokemon = document.getElementById('numero-pokemon');
const tipoPokemon = document.getElementById('tipo-pokemon');
const input = document.getElementById('input');
const fotoPokemon = document.getElementById('foto-pokemon');
const corCard = document.getElementById('cor-card');

const fetchPokemon = async (input) => {
    const APIfetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await APIfetch.json();
    return data;
}

const exibirPokemon = async (input) => {
    const data = await fetchPokemon(input);

    nomePokemon.innerHTML = data.name;
    numeroPokemon.innerHTML = `#${data.id}`;
    tipoPokemon.innerHTML = data.types[0].type.name;
    fotoPokemon.src = data.sprites.versions['generation-v']['black-white']['animated']['front_default'];

    corCard.classList.remove(
        'fire', 'water', 'grass', 'electric', 'normal', 'poison', 'ghost', 
        'flying', 'ground', 'fighting', 'bug', 'dragon', 'ice', 'psychiq', 'steel', 'dark'
    );

    switch (tipoPokemon.innerHTML) {
        case 'fire':
            corCard.classList.add('fire');
            break;
        case 'water':
            corCard.classList.add('water');
            break;
        case 'grass':
            corCard.classList.add('grass');
            break;
        case 'electric':
            corCard.classList.add('electric');
            break;
        case 'normal':
            corCard.classList.add('normal');
            break;
        case 'poison':
            corCard.classList.add('poison');
            break;
        case 'ghost':
            corCard.classList.add('ghost');
            break;
        case 'flying':
            corCard.classList.add('flying');
            break;
        case 'ground':
            corCard.classList.add('ground');
            break;
        case 'fighting':
            corCard.classList.add('fighting');
            break;
        case 'bug':
            corCard.classList.add('bug');
            break;
        case 'dragon':
            corCard.classList.add('dragon');
            break;
        case 'ice':
            corCard.classList.add('ice');
            break;
        case 'psychic':
            corCard.classList.add('psychiq');
            break;
        case 'steel':
            corCard.classList.add('steel');
            break;
        case 'dark':
            corCard.classList.add('dark');
            break;
        default:
            break;
    }
}

const pesquisarPokemon = () => {
    exibirPokemon(input.value);
    preventDefault();
}

const preventDefault = () => {
    input.value = '';
}
