import * as React from "react";

import "./ShoppingCart.css";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";

export default function ShoppingCart(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var totalPrice = 0;
  const TAXES = 0.0725;
  var showCart = false;

  return (
    <div
      className={
        props.isOpen ? "shopping-cart-elem" : "shopping-cart-elem hidden"
      }
    >
      <div
        className={
          true ? "shopping-cart-wrapper" : "shopping-cart-wrapper hidden" // FIXME: logic for showing cart
        }
      >
        <TableContainer className="shopping-cart-table">
          <Table
            sx={{ minWidth: "60%" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow
                key="018409175"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Product
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Amount
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.products.map((item) => {
                if (item.amount > 0) {
                  totalPrice += item.amount * item.price;
                  showCart = true;
                  return (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">{item.amount}</TableCell>
                      <TableCell align="center">
                        {formatter.format(item.price)}
                      </TableCell>
                      <TableCell align="center">
                        {formatter.format(item.amount * item.price)}
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Subtotal
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  {formatter.format(totalPrice)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Taxes and Fees
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  {formatter.format(totalPrice * TAXES)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  {formatter.format(totalPrice * (TAXES + 1))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
