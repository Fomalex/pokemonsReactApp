import {useEffect, useState} from "react";

import Header from "../header/header";
import MainButtons from "../mainButtons/mainButtons";
import MainDescription from "../mainDescription/mainDescription";


import './App.scss';


const App = () => {
    const [name, setName] = useState(null);

    const onNameSelected = (name) => {
        setName(name);
    }

    return (
        <div className="app">
            <Header/>
            <div className="main">
                <MainButtons
                    onNameSelected={onNameSelected}/>
                <MainDescription
                    charName={name}/>
            </div>
        </div>
    );
}

export default App;
