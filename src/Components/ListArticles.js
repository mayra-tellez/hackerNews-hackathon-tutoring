import React from "react";
import DisplayArticleCard from "./DisplayArticleCard";

const ListArticles = (props) => {
  const articles = props.data;

  return (
    <div>
      {articles.map((article, i) => <DisplayArticleCard article={article} key={i} />)}
    </div>
  )
} 

export default ListArticles;