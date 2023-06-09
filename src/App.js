// import logo from './logo.svg';
import ImgRickyMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    // const api = await fetch('https://rickandmortyapi.com/api/character')
    const api = await fetch('https://rickandmortyapi.com/api/character/')
    const charaterApi = await api.json();
    console.log( 'app');
    console.log( charaterApi.results);
    setCharacters(charaterApi.results);
    // console.log('dentro reqApi characters' + characters);

  }


  // console.log( 'characters');
  // console.log( characters);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Marty</h1>
        {/* Si tiene algo en charateds muestro lo encotnrado, sino muestro la imagen de rick y el bus car */}
        {characters ? ( <Characters characters={characters} setCharacters={setCharacters} />) 
                    : 
                    ( 
                      <>
                    <img  src={ImgRickyMorty} alt="Rick y Morty" className="img-home"></img>
                    <button  onClick={reqApi} className='btn-search'> Buscar Personajes</button>
                      </>
                     )
        } 


      </header>
    </div>
  );
}

export default App;
