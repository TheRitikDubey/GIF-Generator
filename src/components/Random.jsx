import axios from "axios";
import React, {useState, useEffect} from "react";
export default function Random() {
  const [gif, setgit] = useState('');
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
  console.log(API_KEY);
  async function fetchData(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const data = await axios.get(url);
    console.log(data);
  }
  useEffect( () => {
    fetchData();
  },[])
  function HandleGenerateGIF() {
    
  }
  return (
      <div className="bg-green-500 h-[450px] rounded-lg border-black border items-center gap-y-5  w-1/2 flex flex-col">
          <h1 className="text-center text-2xl font-bold underline uppercase">A Random GIF</h1>
            <img src={gif} alt="" />
            <button className="w-10/12 bg-white p-4  opacity-80 rounded-md" onClick={HandleGenerateGIF}>Generate</button>
       </div>
  );
}
