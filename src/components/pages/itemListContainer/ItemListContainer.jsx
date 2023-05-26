function ItemListContainer({ nombre, precio }) {
  return (
    <div>
      <h1>Acá van los productos</h1>
      <div>Producto: {nombre} </div>
      <div>Precio: {precio}</div>
    </div>
  );
}

export default ItemListContainer;
