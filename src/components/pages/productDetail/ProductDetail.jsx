import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./ProductDetail.css";
import ItemCount from "../../common/itemCount/itemCount";
const ProductDetail = ({ detailProduct, quantity, onAdd }) => {

  return (
    <div className="detailContainer">
      <div className="detailCard">
        <Card sx={{ width: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={detailProduct.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {detailProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detailProduct.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {detailProduct.stock > 0 ? (
            <ItemCount stock={detailProduct.stock} initial={quantity} onAdd={onAdd} />)
            : <h2>NO HAY STOCK</h2>}
            <Button size="small" color="primary">
              Agregar al carrito
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
