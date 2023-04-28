import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Home/NewsCard/NewsCard";

const Category = () => {
  let { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>This Category News {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
