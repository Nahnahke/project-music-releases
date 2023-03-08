import React from 'react';
import Album from './Album';

const NewsList = (props) => {
  return (
    <section>
      {props.albumList.albums.items[].map((singleAlbum) => {
        return (<Album key={singleAlbum.id} albumDetails={singleAlbum} />
        )
      })}
    </section>
  );
}
export default NewsList;
