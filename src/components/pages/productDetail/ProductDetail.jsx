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
import { Link } from "react-router-dom";
const ProductDetail = ({ detailProduct, quantity, onAdd }) => {

  return (
    <div className="detailContainer">
      <div className="detailCard">
        <Card
          sx={{
            width: 900,
            height: 500,
            display: "flex",
            margin: 4,
            borderBox: 3,
          }}
        >
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              sx={{ width: 400, height: 300 }}
              component="img"
              image={detailProduct.img}
            />
            <CardContent sx={{ textAlign: "start" }}>
              <Typography gutterBottom variant="h5" component="div">
                {detailProduct.title}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                ${detailProduct.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detailProduct.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ width: 250 }}>
            {detailProduct.stock > 0 ? (
              <ItemCount
                stock={detailProduct.stock}
                initial={quantity}
                onAdd={onAdd}
              />
            ) : (
              <div>
                <Typography>SIN STOCK</Typography>
                <Link to="/products">
                  <Button variant="outlined">Seguir comprando</Button>
                </Link>
              </div>
            )}
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
