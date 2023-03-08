import React from 'react';

const Album = (props) => {
  return (
    <album className="album">
      <h2>{props.albumDetails.title}</h2>
      <p>{props.albumDetails.description}</p>
      <img src={props.albumDetails.albums.items.images[1].url} alt="Album Cover" />
      <div className="tag-container">
        {props.albumDetails.tags.map((singleTag) => {
          return (
            <span key={singleTag} className="tag">
              {singleTag}
            </span>
          );
        })}
      </div>
    </album>
  );
}

export default Album;