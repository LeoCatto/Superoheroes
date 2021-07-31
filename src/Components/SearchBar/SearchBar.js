import React, { useEffect, useState } from "react";

function SearchBar({onSearch}) {

  const [input, setInput] = useState("");

 useEffect(()=>{
  onSearch(input)
 },[input])

  return (
    <div>
      <input
        type="text"
        placeholder="Heroe..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type='button' placeholder='Superheroe' onClick={(e)=>setInput(e.target.value)}>Search</button>
    </div>
  );
}

export default SearchBar;
