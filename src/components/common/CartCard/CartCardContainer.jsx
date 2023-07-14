import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "@fontsource/roboto/300.css";

const CartCardContainer = ({ elemento, clearById }) => {
  return (
    <div>
      <Card
        sx={{
          width: 700,
          height: 100,
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 4,
          borderBox: 3,
        }}
      >
        <CardActionArea
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <CardMedia
            sx={{ width: 100, height: 100 }}
            component="img"
            image={elemento.img}
            alt={elemento.title}
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
            <Typography
              sx={{ marginLeft: 5 }}
              variant="body2"
              color="text.secondary"
            >
              Cantidad: {elemento.quantity}
            </Typography>
            <Typography sx={{ marginLeft: 5 }}>${elemento.price*elemento.quantity}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => clearById(elemento.id)}>
            <DeleteOutlineOutlinedIcon color="action" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartCardContainer