import React, { useEffect, useState } from "react";
import Child from './child'
const Pagination = () => {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(4);

  useEffect(() => {
    async function getData() {
      let request = await fetch("https://reqres.in/api/users?page=2");
      let data = await request.json();
      setResponse(data?.data);
    }
    getData();
    return () => {};
  }, []);

  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = response.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <>
      <div>
      
          <table border="1" >
            <tbody>
            <tr border="1">
                <th>Name</th>
                <th>Email</th>
              </tr>
            {currentPost.map((item) => (
              <tr key={item.id} border="1">
                <td>{item.first_name}</td>
                <td>{item.email}</td>
              </tr>
                 ))}
            </tbody>
          </table>
     
        <Child
          postPerPage = {postPerPage}
          totalPosts={response.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Pagination;
