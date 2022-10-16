import React from "react";
import "./newsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="newsitems">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <div className="txt">
        <h4>
          <a href={url}>{title}</a>
        </h4> <br />
        <p>{description}</p>
        </div>
       
      </div>
    </div>
  );
};

export default NewsItem;