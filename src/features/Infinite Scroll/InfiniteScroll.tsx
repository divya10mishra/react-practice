import React, { useEffect } from "react";
import useApiData from "../Pagination/useApiData";

function InfiniteScroll() {
  const { apiData, pageLimit, setPageLimit } = useApiData();

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [pageLimit]);

  const handleInfiniteScroll = () => {
    let offsetHeight = window.document.body.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;

    if (scrollTop + innerHeight >= offsetHeight) {
      setPageLimit(() => pageLimit + 10);
    }
  };

  return (
    <div>
      {apiData.map((item, index) => (
        <>
          <div key={index}>
            {item.id}
            <img src={item.images} height={150} width={150} />
            <div>{item.title}</div>
          </div>
        </>
      ))}
      <h1>Loading.... </h1>
    </div>
  );
}

export default InfiniteScroll;
