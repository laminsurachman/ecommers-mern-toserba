import { Box, IconButton, Input, Typography } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import OrdersData from "../../../data/OrdersData";
import LocalMallIcon from "@mui/icons-material/LocalMallOutlined";
const Headers = [
  { name: "Order" },
  { name: "Detail" },
  { name: "Bill" },
  { name: "Date" },
  { name: "Status" },
  { name: "Shipment" },
  { name: "Cost" },
  { name: "Resi" },
  { name: "Action" },
];
const ListOrder = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Pesanan Kamu
        </Typography>

        <Box>
          <Input placeholder="seacrh by order" />
        </Box>
      </Box>{" "}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {" "}
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Headers.map((item) => (
                  <TableCell key={item.name} align="center">
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {OrdersData.map((item) => {
                const options = {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                };
                const date = new Date(item.createdAt.$date);
                const formattedDate = date.toLocaleDateString("in-ID", options);
                return (
                  <TableRow key={item.order}>
                    <TableCell align="center">{item.order}</TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <LocalMallIcon sx={{ color: "blue" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">{`Rp ${parseFloat(
                      item.payment
                    ).toLocaleString("in-ID")}`}</TableCell>
                    <TableCell align="center">{formattedDate}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="center">{item.status_order}</TableCell>
                    <TableCell align="center">{`Rp ${parseFloat(
                      item.shipping_cost
                    ).toLocaleString("in-ID")}`}</TableCell>
                    <TableCell align="center">{item.resi}</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ListOrder;
