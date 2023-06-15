import { useState, useEffect } from "react";
import { productAxios } from "../../../api/axiosInstance";


const Fetching = () => {

    const [products, setProducts] = useState ([]);

    useEffect(()=>{
        const getData = productAxios.get("");
            getData
            .then ((res) => setProducts(res.data))
            .catch(err => console.log(err));
    }, [])
}

export default Fetching