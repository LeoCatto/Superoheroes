import React from "react";
import { Interface } from "readline";

interface ICard{
  name:string,
  alias:string,
  powerstats:number,
  image:string,
  id:number,
  getFavourites:(id:number)=>void
}

export default function Card({ name, alias, powerstats, image, id, getFavourites}:ICard) {

  return (
    <div >
      <button type='button' onClick={(e)=>getFavourites(id)}>
      <h5 >{name}</h5>
      </button>
      <div>
        <div>
          <img
            className="laimagen"
            src={`${image}`}
            alt="no se encontro imagen"
          />
        </div>
        <div>
            <p>Puntos de poder:{powerstats}</p>
        </div>
        <div>
            <p>Nombre real:{alias}</p>
        </div>
      </div>
    </div>
  );
}