import Rick from "./img/rick-morty.png";
import './App.css';
import {useState} from "react";
import Character from "./component/Character";

function App() {
    const [character, setCharacter] = useState(null);
      



    const reqApi = async () => {
       const api = await fetch('https://rickandmortyapi.com/api/character');
         const characterApi = await api.json();

            setCharacter(characterApi.results);

    }




  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and morty</h1>
          {character ? (
              <Character character ={character} setCharacter={setCharacter} />
          ) : (
              <>
          <img src={Rick} alt="Rick and morty" className="img-home"/>
          <button onClick={reqApi} className="btn-search">buscar personajes</button>
              </>
            )}
              </header>
    </div>
  );
}

export default App;
