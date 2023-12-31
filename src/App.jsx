import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

export function App() {
  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [buscar, setBuscrar] = useState("");

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };

  const onPrevious = () =>{
    fetchCharacters(info.prev)
  }

  const onNext = () =>{
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <body style={{backgroundColor:"#E0F4FF",}}>
      <Navbar brand="Rick and Morty App" />

      <div className='container mt-5 bg-dark'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={character} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </body>
  );
}
