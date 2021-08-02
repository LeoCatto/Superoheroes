import axios from 'axios';
import React, { useEffect, useState } from 'react';
import internal from 'stream';
import Card from '../Heroes/Card';
import SearchBar from '../SearchBar/SearchBar';

interface ICards{
  getFavourites:(id:number)=>void,
  heroeList:Array<any>
}

export const Cards = ({ heroeList, getFavourites }:ICards) => {

    const RenderData = (heroeList:Array<any>):JSX.Element => {
      return (
          <div className='cadauna'>
            {heroeList?.length > 0
              ? heroeList?.map((pj) => {
                  return (
                    <div className='aver'>
                      <Card
                        key={pj.id}
                        id={pj.id}
                        getFavourites={getFavourites}
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
                {RenderData(heroeList)}
            </div>
    )
}

export default Cards;

