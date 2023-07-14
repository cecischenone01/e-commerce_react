import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({elemento}) => {
  return (
    <Link to={`/detail/${elemento.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={elemento.img}
            alt={elemento.title}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"$" + elemento.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default ProductCard