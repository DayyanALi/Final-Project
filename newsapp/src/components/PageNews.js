/** @format */

import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import { Col, Container, Row } from 'react-bootstrap';

function PageNews({ newsCategory }) {
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
  }, [newsCategory]);

  return (
    <>
      <Container className='me-4'>
        <Row className='d-flex justify-content-between'>
        <h2 className='text-white'>{newsCategory}</h2>
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
        </Row>
      </Container>
    </>
  );
}

export default PageNews;
