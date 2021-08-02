import React, { useEffect, useState } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';
import Cards from "../Cards/Cards";
import axios from "axios";
import { NavBar } from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import './home.css'

// interface ISaveToLocalStorage {
//   saveToLocalStorage:(items:Array<object>)=>void
// }

// interface IOnSearch {
//   value:any,
//   fitrados:()=>void
// }

// interface IGetEl {
//   e:any,
//   id:number
// }

// interface IGetFavourites {
//   getFavourites:({e,id}:IGetEl)=>void
// }

export default function Home() {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeigth: 100,
    })
  );

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

  const saveToLocalStorage = (items) => {
    localStorage.setItem("heroe-favourites", JSON.stringify(items));
  };

  function getFavourites(e, id) {
    e.preventDefault();
    var hr = heroes.filter((hero) => hero.id === id);
    saveToLocalStorage(hr);
    setFavourites([...favourites, hr]);
  }

  const x = {};
  localStorage.setItem("key", JSON.stringify(x));
  const storedX = JSON.parse(localStorage.getItem("key"));

  function onSearch(value) {
    const filtrados = heroeD.filter(
      (h) =>
        h.name.toLowerCase().includes(value.toLowerCase()) ||
        h.biography.fullName.toLowerCase().includes(value.toLowerCase())
    );
    setHeroes(filtrados);
  }

  return (
    <div>
      <div style={{ width: "100%", heigth: "100vh" }}>
        <AutoSizer>
          {({ width, heigth })=>(
            <List 
              width={width}
              heigth={heigth}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={heroes.length} 
              rowRender={({ key, index, style, parent})=>{
                const heroeList= heroes[index]
                return(
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                    <div className="home-container">
                      <div>
                        <Cards heroes={favourites} getFavourites={getFavourites} />
                      </div>
                      <div>
                        <SearchBar onSearch={onSearch} />
                          <div className="card-container">
                            <Cards heroeList={heroeList} getFavourites={getFavourites} />
                          </div>
                      </div>
                        <div>
                          <NavBar />
                        </div>
                    </div>
                    </div>
                  </CellMeasurer>   
                )
              }}
              />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
