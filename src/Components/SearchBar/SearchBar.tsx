import React, { ChangeEvent, useEffect, useState } from "react";

interface ISearchBar {
  onSearch:(input:string)=>void
}

function SearchBar({onSearch}:ISearchBar) {

  
  const handleChange = (event:ChangeEvent):void=>{
    const {value} = event.target as HTMLInputElement
    setInput(value)
  }

  // const handleClick=():void=>{

  // }

  const [input, setInput] = useState<string>("");

 useEffect(()=>{
  onSearch(input)
 },[input])

  return (
    <div>
      <input
        type="text"
        placeholder="Heroe..."
        value={input}
        onChange={handleChange}
      />
      {/* <button type='button' placeholder='Superheroe' onClick={(e)=>setInput(e.target.value)}>Search</button> */}
    </div>
  );
}

export default SearchBar;
