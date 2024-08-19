import { useState, useEffect } from "react";

interface itemDetails {
  id: number;
  title: string;
  images: string;
}

type product = itemDetails[];

const UseApiData = () => {
  const [apiData, setApiData] = useState<product>([]);
  const [pageLimit, setPageLimit] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch(
        `https://dummyjson.com/products?limit=${pageLimit}`
      );
      const result = await fetched.json();
      setApiData(result.products);
    };

    fetchData();
  }, [pageLimit]);

  return { apiData, pageLimit, setPageLimit };
};

export default UseApiData;
