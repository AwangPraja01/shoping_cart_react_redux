import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { AddRemoveFromCart } from "./AddRemoveFromCart";

const ShopingItems = (props) => {
  const { products } = props;

  return products.map((product) => (
    <Grid key={product.id} item xs={5}>
      <Paper style={{ padding: "20px", margin: "auto", maxWidth: 400 }}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item>
            <ButtonBase style={{ width: 128, height: 128 }}>
              <img
                style={{
                  margin: "auto",
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                alt='complex'
                src={product.imgURL}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column'>
              <Grid item xs>
                <Typography variant='body1'>{product.name}</Typography>
                <Typography variant='subtitle1'>{product.locations}</Typography>
                <Typography variant='subtitle1'>Rp. {product.price}</Typography>
                {/* <Button
                    style={{ marginTop: "10px" }}
                    variant='contained'
                    color='primary'>
                    Add To Cart
                  </Button> */}
                <Grid
                  item
                  xs
                  container
                  direction='row'
                  alignItems='center'
                  style={{ marginTop: "10px" }}>
                  <AddRemoveFromCart product={product} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  ));
};

export default ShopingItems;
