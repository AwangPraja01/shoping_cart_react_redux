import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ShopingItems from "./ShopingItems";
import CheckOutDialog from "./checkOutDialog/CheckOutDialog";

export class ShopingListingItems extends Component {
  state = {
    products: [
      {
        total: 0,
        id: 1,
        name: "Ice Creams",
        locations: "Jakarta",
        price: 5000,
        imgURL:
          "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894__340.jpg",
      },
      {
        total: 0,
        id: 2,
        name: "Berries",
        locations: "Surabaya",
        price: 6000,
        imgURL:
          "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg",
      },
      {
        total: 0,
        id: 3,
        name: "Peers",
        locations: "Jakarta",
        price: 7000,
        imgURL:
          "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534494__340.jpg",
      },
      {
        total: 0,
        id: 4,
        name: "Anggur",
        locations: "Pontianak",
        price: 10000,
        imgURL:
          "https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230__340.jpg",
      },
      {
        total: 0,
        id: 5,
        name: "Burger",
        locations: "Malang",
        price: 8000,
        imgURL:
          "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054__340.jpg",
      },
      {
        total: 0,
        id: 6,
        name: "Blueberry",
        locations: "Jakarta",
        price: 5000,
        imgURL:
          "https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberry-1326154__340.jpg",
      },
      {
        total: 0,
        id: 7,
        name: "Bawang",
        locations: "Jakarta",
        price: 6400,
        imgURL:
          "https://cdn.pixabay.com/photo/2016/03/05/22/59/food-1239423__340.jpg",
      },
      {
        total: 0,
        id: 8,
        name: "Asparagus",
        locations: "Solo",
        price: 5000,
        imgURL:
          "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305__340.jpg",
      },
      {
        total: 0,
        id: 9,
        name: "Strawberry",
        locations: "Pontianak",
        price: 2000,
        imgURL:
          "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberries-1330459__340.jpg",
      },
      {
        total: 0,
        id: 10,
        name: "Selai",
        locations: "Jakarta",
        price: 12000,
        imgURL:
          "https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094__340.jpg",
      },
    ],
  };

  render() {
    return (
      <Container>
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>
          Tambahkan Barang Ke Keranjang Anda
        </h2>
        <Grid
          spacing={2}
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ marginTop: "30px", marginBottom: "30px" }}>
          <ShopingItems products={this.state.products} />
          <Grid
            style={{ marginTop: "30px" }}
            container
            xs={6}
            item
            direction='row'
            justify='center'
            alignItems='center'>
            <CheckOutDialog />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ShopingListingItems;
