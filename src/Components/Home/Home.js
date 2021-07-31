import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import axios from "axios";
import { NavBar } from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import './home.css'

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [heroeD, setHeroeD] = useState([]);

  useEffect(() => {
    axios
      .get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((res) => {
        setHeroeD(res.data);
        setHeroes(res.data);
      });
  }, []);

  const saveToLocalStorage = items => {
    localStorage.setItem('heroe-favourites', JSON.stringify(items));
};

  function getFavourites(e,id) {
      console.log(id)
      e.preventDefault();
    var hr = heroes.filter((hero) => hero.id === id);
    saveToLocalStorage(hr)
    setFavourites([...favourites, hr]);
  }

//   const x = {} 
//   localStorage.setItem('key', JSON.stringify(x))
//   const storedX = JSON.parse(localStorage.getItem('key'))


  function onSearch(value) {
    const filtrados = heroeD.filter(
      (h) => h.name.toLowerCase().includes(value.toLowerCase()) || h.biography.fullName.toLowerCase().includes(value.toLowerCase())
    );
    setHeroes(filtrados);
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="home-container">
        <div>
          <Cards heroes={favourites} getFavourites={getFavourites} />
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
          <div className='card-container'> 
            <Cards heroes={heroes} getFavourites={getFavourites} />
          </div>
        </div>
      </div>
    </div>
  );
}
