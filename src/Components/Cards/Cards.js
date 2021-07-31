import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Heroes/Card';
import SearchBar from '../SearchBar/SearchBar';

export const Cards = ({ heroes, getFavourites }) => {

    const RenderData = (heroes) => {
      return (
          <div className='cadauna'>
            {heroes?.length > 0
              ? heroes?.map((pj) => {
                  return (
                    <div className='aver'>
                      <Card
                        key={pj.id}
                        id={pj.id}
                        // getFavourites={getFavourites}
                        name={pj.name}
                        powerstats={pj.powerstats.intelligence}
                        image={pj.images.sm}
                        alias={pj.biography.fullName}
                      />
                    </div>
                  );
                })
              : "loading"}
          </div>
      );
    };


 



    return(
            <div className='render-cart'>
                {RenderData(heroes.slice(0,8))}
            </div>
    )
}

export default Cards;

