import { addDoc, collection } from "firebase/firestore"
import {products} from "./././ProductsMock"
import { dataBase } from "./firebaseConfig"

const AddDoc = () => {
    const rellenar = ()=>{
        let itemsCollection = collection(dataBase, "products")
        products.forEach((elemento)=>{
            addDoc(itemsCollection, elemento);
        })
    }
  return (
    <div><button onClick={rellenar}>ADD</button></div>
  )
}

export default AddDoc