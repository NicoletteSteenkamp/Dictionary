import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded,setLoaded]=useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response){
    setPhotos(response.data.photos);
  }

  function search(){ 
    let apiKey="ae997t30869fc345038bf7f0abaao7e6"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
   axios.get(apiUrl).then(handleResponse);

  let imgApiKey="ae997t30869fc345038bf7f0abaao7e6";
  let imgUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
  axios.get(imgUrl).then(handleImgResponse)
  }

  function handleSubmit(event) {
    event.preventDefault();
  search();}

   

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load(){
  setLoaded(true);
  search();
}

if (loaded)
  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
      <label>What word would you like to look up?</label>
     <br/>
        <input type="search" autoFocus onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
Suggested words: student, wine, peach...
      </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
  else {
    load();
    return"Loading";
  }
}