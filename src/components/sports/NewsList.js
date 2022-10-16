import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=845db4aa51d64d69ba55be62203c9cf4",
        {
          params: {
            category: "sports",
          },
        }
      )
      .then((response) => {
        // handle success
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div>
        {articles.map(({ title, description, url, urlToImage }) => (
          <NewsItem 
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </div>
    </>
  );
};

export default NewsList;
