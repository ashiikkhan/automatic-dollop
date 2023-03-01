import { useEffect, useState } from "react";

const useProductsData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useProductsData;
