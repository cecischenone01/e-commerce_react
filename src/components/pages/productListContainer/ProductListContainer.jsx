import { Box, Grid, Skeleton, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import ProductList from "./ProductList";

const ProductListContainer = () => {

  const [products] = useFetch([])
  
  if(products.length === 0){
    return (
      <div>
        <Grid container wrap="wrap">
          {(products ? Array.from(new Array(9)) : products).map(
            (item, index) => (
              <Box
                key={index}
                sx={{ width: 400, heigth: 500, marginLeft: 5.0, my: 5 }}
              >
                {item ? (
                  <img
                    style={{ width: 230, height: 118 }}
                    alt={item.title}
                    src={item.src}
                  />
                ) : (
                  <Skeleton variant="rectangular" width={250} height={270} />
                )}

                {item ? (
                  <Box sx={{ pr: 2 }}>
                    <Typography gutterBottom variant="body2">
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="caption"
                      color="text.secondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {`${item.views} • ${item.createdAt}`}
                    </Typography>
                  </Box>
                ) : (
                  <Box sx={{ pt: 0.8 }}>
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                  </Box>
                )}
              </Box>
            )
          )}
        </Grid>
      </div>
    );
  }

  return (
    <>
    <ProductList products={products} />
    </>
  ) ;
};

export default ProductListContainer;
