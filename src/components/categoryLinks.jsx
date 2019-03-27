import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "<styles>/ViewArticlesPage.scss";

const CategoryLinks = props => {
  return (
    <div className="links-section">
      {props.categories.map((category, index) => (
        <Link
          key={index}
          className="links"
          to={`/categories/${category.toLowerCase()}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

CategoryLinks.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryLinks;
