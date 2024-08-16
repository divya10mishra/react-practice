import React, { useState, useEffect } from "react";
import UseApiData from "./UseApiData";

interface itemDetails {
  id: number;
  title: string;
  images: string;
}

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const { apiData } = UseApiData();

  return (
    <>
      {apiData.slice(page * 10 - 10, page * 10).map((item) => (
        <div>
          {item.id}
          <img src={item.images} height={150} width={150} />
          <div>{item.title}</div>
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
