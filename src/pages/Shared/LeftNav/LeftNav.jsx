import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftCard from "../../News/LeftCard/LeftCard";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://the-news-dragon-server-pro-freelancermahabubs.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4 className="mt-4">All Category</h4>
      <div className="ps-4 ">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category?.name}
            </Link>
          </p>
        ))}
      </div>
      <LeftCard />
    </div>
  );
};

export default LeftNav;
