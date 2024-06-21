import React from "react";

function Child({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postPerPage, totalPosts, totalPosts / postPerPage, "pageNumbers");

  return (
    <div>

        {pageNumbers.map((item) => (
          <span key={item} >
            <a href="#" onClick={() => paginate(item)}>  {item}</a>
          </span>
        ))}

    </div>
  );
}

export default Child;

