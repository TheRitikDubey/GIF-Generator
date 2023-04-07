import axios from "axios";
import React, {useState, useEffect} from "react";
import Spinner from "./Spinner";
export default function Random() {
  const [gif, setgif] = useState('');
  
  const [loader, setloader] = useState(false);
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
  console.log("KEy of the API is: ",API_KEY); //Undefined
  console.log(API_KEY);
  async function fetchData(){
    setloader(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    console.log(data);
    setloader(false);
    const image_url=data.data.images.downsized_large.url;
    console.log(image_url);
    setgif(image_url)

  }
  useEffect( () => {
    fetchData();
  },[])
  function HandleGenerateGIF() {
    fetchData()
  }
  return (
      <div className="bg-green-500 mt-[25px] rounded-lg border-black border items-center gap-y-5  w-1/2 flex flex-col">
          <h1 className="text-center text-2xl font-bold underline mt-10 uppercase">A Random GIF</h1>
            { loader === true? <Spinner/>:<img src={gif} alt="" width="400" />}
            <button className="w-10/12 bg-white mb-6 p-4  opacity-80 rounded-md" onClick={HandleGenerateGIF}>Generate</button>
       </div>
  );
}
