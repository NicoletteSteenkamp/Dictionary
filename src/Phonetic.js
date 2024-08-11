import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div>
      
      {props.phonetic ? (
        <section>
          <h4>Phonetic: {props.phonetic}</h4>
        </section>
      ) : (
        <section>
          <h4>Phonetic information is not available</h4>
        </section>
      )}
    </div>
  );
}
