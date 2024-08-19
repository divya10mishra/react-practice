import React, { useState, useEffect } from "react";
import useApiData from "./useApiData";

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const { apiData, setPageLimit } = useApiData();

  useEffect(() => {
    setPageLimit(100);
  }, []);

  return (
    <>
      {apiData.slice(page * 10 - 10, page * 10).map((item) => (
        <div>
          {item.id}
          <img src={item.images} height={100} width={100} />
          {item.title}
        </div>
      ))}

      <div
        style={{
          width: "100%",
          padding: "1%",
          margin: "1%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span>⬅️</span>
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            style={{ padding: "1%", margin: "1%", cursor: "pointer" }}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span>➡️</span>
      </div>
    </>
  );
};

export default Page;
