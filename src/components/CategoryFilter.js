import React from "react";

function CategoryFilter({categories}) {
  const categoryElements = categories.map((category, index) => (<button key={index} className="" onClick = {e => handleFilter(e)} >{category}</button>))

  function handleFilter(e){
    e.target.className = "selected"

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryElements}
    </div>
  );
}

export default CategoryFilter;
