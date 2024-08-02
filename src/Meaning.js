import React from "react";
import Example from "./Example"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.map(function (meaning, index) {
        return (
          <div key={index}>
            <p>
              <strong>{meaning.partOfSpeech}</strong> 
              <br />
              <strong>Definition</strong> {meaning.definition} 
              <br />
              <Example example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
