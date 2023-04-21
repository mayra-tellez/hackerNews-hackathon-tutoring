import React from "react";
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const DisplayArticleCard = ({ article }) => {
  const { url, title, author, points, created_at } = article;

  const timePassed = formatDistanceToNowStrict(new Date(created_at))

  return (
    <div>
      <h4><a href={url} target="blank">{title}</a></h4>
      <p>Author: {author}</p>
      <p>Url: <a href={url} target="blank">{url}</a></p>
      <p>Points: {points}</p>
      <p>Created: {timePassed} ago</p>
    </div>
  )
}

export default DisplayArticleCard;