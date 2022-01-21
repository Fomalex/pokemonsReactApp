import Button from '@mui/material/Button';
import PokeService from "../../services/pokeService";
import {useEffect, useState} from "react";

import './mainButtons.scss';

const MainButtons = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [btns, setBtns] = useState([]);

    const poke = new PokeService();
    const btnCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        poke.getAllCharacters()
            .then(
                (result) => {
                    setIsLoaded(true);
                    let newBtns = [];
                    btnCounts.forEach(item => {
                        newBtns.push(result[item].name);
                    });
                    setBtns(newBtns.map((name, i) => {
                        return (
                            <Button key={i + 1}
                                    className="main-btn"
                                    variant="contained"
                                    name = {name}
                                    onClick={() => props.onNameSelected(name)}>{name}</Button>
                        )
                    }));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="main-btns">
                {btns}
            </div>
        )
    }
}

export default MainButtons;