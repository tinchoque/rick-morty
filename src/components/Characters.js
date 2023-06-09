// import React from 'react'
// import { computeHeadingLevel } from "@testing-library/react";

export default function Characters({characters,setCharacters}) {

    // const characters = characters212
    //const {characters1} = props;

const resetCharacters = () =>{
   setCharacters(null);
}
    
    
  return (
    <div className="chacateres">   
        <h1> Personajes</h1>
        <span className="back-home" onClick={resetCharacters}> Volver</span>
        <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status==="Alive"?
                                                            (
                                                                <>
                                                                    <span className="alive"/>
                                                                    Alive
                                                                </>
                                                            )
                                                            :
                                                            (
                                                                <>
                                                                <span className="dead"/>
                                                                Dead
                                                                </>
                                                            )
                                }
                            </h6>
                            <p>
                                <span className="text-grey"> Episodios : </span>
                                <span> {character.episode.length} </span>
                            </p>
                            <p>
                                <span className="text-grey"> Especie : </span>
                                <span> {character.species} </span>
                            </p>
                        </div>

              
                    </div>

                ))}
        </div>
        <span className="back-home" onClick={resetCharacters}> Volver</span>

    </div>
    
  )
}
