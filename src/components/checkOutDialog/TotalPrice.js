import React from "react";

function createData(price, totalCount, totalPrice) {
  return { price, totalCount, totalPrice };
}

const TotalPrice = (props) => {
  const { productCheckOut } = props;

  const priceData = productCheckOut.map((product) =>
    createData(product.price, product.total, product.price * product.total)
  );

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

  const listPriceProducts = [];
  priceData.map((data) => listPriceProducts.push(data.totalPrice));

  const priceTotal = listPriceProducts.reduce(function (a, b) {
    return a + b;
  }, 0);

  return <span>{convertToRupiah(priceTotal)}</span>;
};

export default TotalPrice;
