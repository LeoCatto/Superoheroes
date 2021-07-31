import React from "react";

export default function Card({ name, alias, powerstats, image, id, getFavourites}) {

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