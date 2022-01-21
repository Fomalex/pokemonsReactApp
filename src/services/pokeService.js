import axios from "axios";

class PokeService {
    _apiBase = "https://pokeapi.co/api/v2/";

    getAllCharacters = async () => {
        const res = await axios.get(`${this._apiBase}pokemon`);
        return res.data.results
    }

    getCharacter = async (name) => {
        const res = await axios.get(`${this._apiBase}pokemon/${name}`);
        return this._transformCharacter(res);
    }

    _transformCharacter = (res) => {
        return {
            id: res.data.id,
            name: res.data.name,
            imageUrl: res.data.sprites.versions['generation-v']['black-white'].front_shiny,
            moves: res.data.moves.length,
            height: res.data.height,
            attack: res.data.stats[1].base_stat
        }
    }
}

export default PokeService;

