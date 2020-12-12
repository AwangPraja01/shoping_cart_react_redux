import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";
import ListOfCheckOutItem from "./ListOfCheckOutItem";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TotalPrice from "./TotalPrice";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  table: {
    minWidth: 250,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CheckOutDialog = () => {
  const listOfItems = useSelector((state) => state.itemInCart.items);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const productCheckOut = [...new Set(listOfItems)];

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        style={{ minWidth: "calc(100vw - 26em)" }}
        onClick={handleClickOpen}>
        Check Out
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Cart
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              Checkout
            </Button>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Nama Produk</TableCell>
                <TableCell align='left'>Harga Produk</TableCell>
                <TableCell align='left'>Total Produk</TableCell>
                <TableCell align='left'>Total Harga</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ListOfCheckOutItem productCheckOut={productCheckOut} />
              <TableRow>
                <TableCell align='left'>
                  <b>Total Harga Seluruhnya</b>
                </TableCell>
                <TableCell align='left'></TableCell>
                <TableCell align='left'></TableCell>
                <TableCell align='left'>
                  <b>
                    <TotalPrice productCheckOut={productCheckOut} />
                  </b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </div>
  );
};

export default CheckOutDialog;
