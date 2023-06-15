import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({elemento}) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"$" + elemento.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${elemento.id}`}>
          <Button variant="contained" size="small" color="inherit">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProductCard