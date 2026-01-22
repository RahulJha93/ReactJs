import React, { useEffect, useState } from "react";
import axios from "axios";
const LIMIT = 10;

const Page = () => {
  const [products, setProducts] = useState({ products: [], total: 0 });
  console.log(products);
  const [skip, setSkip] = useState(0);

  const fetchNext = () => {
    setSkip((prev) => prev + 10);
  };

  const fetchPrev = () => {
    setSkip((prev) => prev - 10);
  };

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`)
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res));
  // }, [skip]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
    );
    setProducts(response.data);
    console.log(response.data);
  };
  fetchData();
  }, [skip]);

  return (
    <div>
      <>
        {products?.products.map((e) => (
          <p key={e.id}>{e.title}</p>
        ))}
        <button onClick={fetchPrev} disabled={skip === 0}>
          Prev
        </button>
        <button onClick={fetchNext} disabled={skip + LIMIT >= products.total}>
          Next
        </button>
      </>
    </div>
  );
};

export default Page;
