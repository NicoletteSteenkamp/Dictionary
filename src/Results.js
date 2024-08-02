import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results.length > 0) {
      return (
        <div className="Result">
        <h2>{props.result.word}</h2>
        <h5>/{props.result.phonetic}/</h5>
        <Meaning meaning={props.result.meanings} />
      </div>
    );
    
    } else {
      return null;
    }
  }
  