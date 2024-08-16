import { useState, useEffect } from "react";

interface itemDetails {
  id: number;
  title: string;
  images: string;
}

type product = itemDetails[];

const UseApiData = () => {
  const [apiData, setApiData] = useState<product>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch("https://dummyjson.com/products?limit=100");
      const result = await fetched.json();
      console.log(result, "result");
      setApiData(result.products);
    };

    fetchData();
  }, []);

  return { apiData };
};

export default UseApiData;
