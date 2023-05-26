import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";



function App() {
  let producto1 = "Lana"

  return (
    <>
    <Navbar />
    <ItemListContainer nombre={producto1} precio={200}/>
    </>
  )
}

export default App;
