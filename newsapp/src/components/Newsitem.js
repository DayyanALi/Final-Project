/** @format */

import React, { useState } from 'react';

function Newsitem({
  currElem,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) {
  const [myStyle, setMyStyle] = useState({
    maxWidth: '22rem',
    height: '19rem',
    overflow: 'hidden',
    backgroundColor: '#223344',
    color: 'white',
  });

  const ScaleUp = () => {
    setMyStyle({
      maxWidth: '22rem',
      height: '19rem',
      transition: 'all 0.2s',
      overflow: 'auto',
      boxShadow: '4px -4px 4px grey',
      backgroundColor: '#223344',
      color: 'white',
    });
  };
  const ScaleDown = () => {
    setMyStyle({
      maxWidth: '22rem',
      height: '19rem',
      transition: '0.2s',
      overflow: 'hidden',
      backgroundColor: '#223344',
      color: 'white',
    });
  };
  return (
    <>
      <div
        className='card mt-3'
        style={myStyle}
        onMouseEnter={ScaleUp}
        onMouseLeave={ScaleDown}
        onClick={() => {
          window.open(url, '_blank');
        }}
      >
        <img
          src={urlToImage}
          className='card-img-top'
          alt='Image Not Available'
        />
        <div className='card-body'>
          <b className='card-title'>{title}</b>
        </div>
      </div>
    </>
  );
}

export default Newsitem;
