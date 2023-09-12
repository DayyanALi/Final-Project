/** @format */

import React, { useEffect, useState } from 'react';
import SectionNews from './SectionNews';
import PageNews from './PageNews';

function Home({ newsCategories, setNewsCategories }) {
  const [inputStyle, setinputStyle] = useState({
    display: 'none',
  });
  const [inputBtnColor, setInputBtnColor] = useState('warning');
  const changeInputStyle = () => {
    // To change the display of the input from hidden to inline-block
    if (inputStyle.display == 'none') {
      setInputBtnColor('success');
      setinputStyle({
        display: 'inline-block',
      });
    } else {
      setInputBtnColor('warning');
      setinputStyle({
        display: 'none',
      });
    }
  };

  let newSection = '';
  const handleInput = (e) => {
    newSection = e.target.value;
  };
  const addNewsSection = () => {
    setNewsCategories([...newsCategories, newSection]);
    console.log(newsCategories);
  };

  if (newsCategories.length > 1) {
    // For Home page
    return (
      <>
        <div className='container'>
          <div className='btn-container d-flex flex-wrap justify-content-center'>
            {newsCategories.map((currElem) => {
              // Displaying Buttons of Each Category at the top
              return (
                <>
                  <button className='btn btn-outline-dark text-white me-2 mt-3'>
                    {currElem}
                  </button>
                </>
              );
            })}
            {/*  Add Button */}
            <button
              className={`btn btn-${inputBtnColor} mt-3`}
              title='Add New Section'
              onClick={() => {
                changeInputStyle();
              }}
            >
              <b>+</b>
            </button>
            <input
              type='text'
              className='mt-3 ms-2 border rounded-2'
              style={inputStyle}
              onChange={handleInput}
            />
            <button
              
              style={inputStyle}
              onClick={() => addNewsSection(newSection)}
              className='btn btn-primary mt-3 ms-2'
            >
              Enter
            </button>
          </div>
          {newsCategories.map((currElem) => {
            return (
              <>
                <SectionNews newsCategory={currElem} key={currElem} />
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    // For other Sections
    return (
      <>
        <PageNews newsCategory={newsCategories} />
      </>
    );
  }
}

export default Home;
