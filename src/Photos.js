import React from "react";


export default function Photos(props) {
  if (!props.photos) {
    return null;
  } else {

    return (
        
      <div className="row">
        {props.photos.map(function (photo, index) {
         
          return (
            <div className="col-sm-4 p-2">
              <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt=""
                  key={index}
                  className="img-fluid"
                />
              </a>
            
            </div>
            
          );
        })}
      </div>
    );
  }
}
