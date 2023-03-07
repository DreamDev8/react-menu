import React from "react";

function Categories(props) {
  return (
    <section className="btn-container">
      {props.categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => props.filterCategories(category)}
            className="btn-category"
            type="button"
          >
            {category}
          </button>
        );
      })}
    </section>
  );
}

export default Categories;
