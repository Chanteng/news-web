import React from 'react'

const NewsItems = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <div>
        <img src={urlToImage} alt="New image" />
      </div>
      <h2>
        <a href={url}>{title}</a>
        <p>{description}</p>
      </h2>
    </>
  )
}

export default NewsItems
