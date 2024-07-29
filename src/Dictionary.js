import React,{useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){

    let [keyword, setKeyword]=useState("")
    let [results, setResults] = useState({});

function handleResponse(response){
    setResults(response.data.meanings[0].definition);
}

    
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`)
    let apiKey="ae997t30869fc345038bf7f0abaao7e6";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word={keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }


    return (<div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true}/>

      </form>
        </div>
        );
}