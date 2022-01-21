import {useEffect, useState} from "react";
import PokeService from "../../services/pokeService";

import './mainDescription.scss';

const MainDescription = ({charName}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('bulbasaur');
    const [imageUrl, setImageUrl] = useState(0);
    const [moves, setMoves] = useState(0);
    const [height, setHeight] = useState(0);
    const [attack, setAttack] = useState(0);

    const poke = new PokeService();

    const getCharacterData = (name) => {
        poke.getCharacter(name)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setId(result.id);
                    setName(result.name);
                    setImageUrl(result.imageUrl);
                    setMoves(result.moves);
                    setHeight(result.height);
                    setAttack(result.attack);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    };

    const updatePokemon = () => {
        if (!charName) {
            getCharacterData(name);
        } else {
            getCharacterData(charName);
        }
    };

    useEffect(() => {
        updatePokemon();
    }, [charName]);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="main-description">
                <div className="main-title">{name[0].toUpperCase() + name.slice(1)}</div>
                <div className="main-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="main-characteristics">
                    <div className="characteristic">Снялся в {moves} сериях</div>
                    <div className="characteristic">id: {id}</div>
                    <div className="characteristic">height: {height}</div>
                    <div className="characteristic">attack: {attack}</div>
                </div>

            </div>
        )
    }
}

export default MainDescription;