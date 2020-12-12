import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function createData(name, price, totalCount, totalPrice) {
  return { name, price, totalCount, totalPrice };
}

const convertToRupiah = (angka) => {
  var rupiah = "";
  var angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};

const ListOfCheckOutItem = (props) => {
  const { productCheckOut } = props;

  const rows = productCheckOut.map((product) =>
    createData(
      product.name,
      product.price,
      product.total,
      product.price * product.total
    )
  );

  const listPriceProducts = [];
  rows.map((row) => listPriceProducts.push(row.totalPrice));

  const priceTotal = listPriceProducts.reduce(function (a, b) {
    return a + b;
  }, 0);

  return rows.map((row) => (
    <React.Fragment>
      <TableRow key={row.name}>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='left'>{convertToRupiah(row.price)}</TableCell>
        <TableCell align='left'>{row.totalCount} Buah</TableCell>
        <TableCell align='left'>{convertToRupiah(row.totalPrice)}</TableCell>
      </TableRow>
    </React.Fragment>
  ));
};

export default ListOfCheckOutItem;
