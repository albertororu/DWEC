import React, { useEffect, useState } from "react";

function Pokemon() {
    const [result, setResultados] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
        .then((response) => response.json())
        .then((data) => {
            Promise.all(
                data.results.map((item) => {
                    return fetch(item.url)
                    .then((response) => response.json())
                })
            ).then((allpokemon) => {
                setPokedex(allpokemon);
                setLoad(false);
            });
        });
    }, []);

    return (
        <div className="">
            <div className='pokegallery'>
                { load ? (
                    <p>Loading...</p>
                ) : (
                    pokedex.map((img, i) => (
                        <div id={img.id} key={img.id}>
                            <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                                <img src={img.sprites.front_default} alt='pokemon' />
                                <div>
                                    <h5>{img.name}</h5>
                                    <h6>type: {img.types[0].type.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Pokemon;
