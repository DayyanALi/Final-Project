/** @format */

import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import articles from './sampleOutput';
import Newsitem from './Newsitem';

function SectionNews({ newsCategory}) {
  const [articleData, setArticleData] = useState([]);

  const getNewsInfo = async () => {
    try {
      let url = `https://newsapi.org/v2/everything?apiKey=f2b8110c4c134c2ebac7bfb278a9f6e5&q=${newsCategory}`;
      const result = await fetch(url);
      const data = await result.json();
      const articles = data.articles;
      setArticleData(articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsInfo();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className='container mt-3 mb-3 me-2'>
        <h4 className='text-white mb-0'>{newsCategory}</h4>
        <Carousel responsive={responsive}>
          {articleData.map((currElem) => {
            const { title, description, url, urlToImage, publishedAt } =
              currElem;
            return (
              <>
                <Newsitem
                  articleData={articleData}
                  title={title}
                  description={description}
                  url={url}
                  urlToImage={urlToImage}
                  publishedAt={publishedAt}
                  key={url}
                />
              </>
            );
          })}
        </Carousel>
        <hr style={{ color: 'black', border: '3px solid grey' }}></hr>
      </div>
    </>
  );
}

export default SectionNews;
