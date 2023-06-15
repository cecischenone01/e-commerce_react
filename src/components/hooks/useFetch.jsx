import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import { useParams } from "react-router-dom";

export const useFetch = (initial) => {
  const [data, setData] = useState(initial);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const dataPromise = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    dataPromise
    .then((res) => setData(res))
    .catch((err) => console.log(err));
  }, [categoryName]);

  return [data];
};

export default useFetch;
