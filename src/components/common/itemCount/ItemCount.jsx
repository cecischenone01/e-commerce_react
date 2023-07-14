import { Button, IconButton, Typography } from "@mui/material";
import useCount from "../../hooks/useCount";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div>
        <div>
          <Typography>Cantidad:</Typography>
          <IconButton onClick={decrement}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <span>{count}</span>
          <IconButton onClick={increment}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="contained" onClick={() => onAdd(count)}>
            Agregar al carrito
          </Button>
          <Link to="/products">
            <Button style={{marginTop: 5}} variant="outlined">
              Seguir comprando
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
