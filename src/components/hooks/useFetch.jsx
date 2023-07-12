import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useFetch = (initial) => {
  const [data, setData] = useState(initial);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(dataBase, "products");
    let consult;

    if (!categoryName) {
      consult = itemsCollection;
    } else {
      let itemsCollection = collection(dataBase, "products");
      consult = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consult)
      .then((res) => {
        let productos = res.docs.map((element) => {
          return {
            id: element.id,
            ...element.data(),
          };
        });
        setData(productos);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return [data];
};

export default useFetch;
