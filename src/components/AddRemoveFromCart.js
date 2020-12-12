import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../redux/ducks/counter";
import { addItem, removeItem } from "../redux/ducks/itemInCart";

export const AddRemoveFromCart = (props) => {
  const { product } = props;
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [countSelf, setCountSelf] = React.useState(0);

  const handleDecrement = () => {
    product.total = product.total - 1;

    if (countSelf <= 1) {
      dispatch(removeItem(product.id));
    }

    if (count > 0 && countSelf > 0) {
      dispatch(decrementCount());
      setCountSelf(countSelf - 1);
    }
  };
  const handleIncrement = () => {
    dispatch(addItem(product));
    dispatch(incrementCount());
    setCountSelf(countSelf + 1);
    product.total = product.total + 1;
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleDecrement}>
        <RemoveIcon />
      </IconButton>
      <b>{countSelf}</b>
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </React.Fragment>
  );
};
