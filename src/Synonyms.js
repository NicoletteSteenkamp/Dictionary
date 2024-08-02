import React from "react";

export default function Synonyms(props){
 if (props.Synonyms)
    {
    return (<ul className="Synonym">
        {props.synonyms.map(function(synonyms,index)
        { return(
    <li key={index}>
     {synonyms}  
    </li>
    )
    })}
    </ul>
);
}
else{
        return null;
    }
}