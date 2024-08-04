import React,{useState} from "react";
import axios from "axios";
import  Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(){

    let [keyword, setKeyword]=useState("")
    let [results, setResults] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

    
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    function search(event){
        event.preventDefault();
    let apiKey="ae997t30869fc345038bf7f0abaao7e6";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }


    return (<div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
       </form>
       <Results results={results}/>
        </div>
        );
}