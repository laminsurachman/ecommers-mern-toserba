import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Box,
} from "@mui/material";

const column = [
  { id: 1, label: "No", width: 20 },
  { id: 2, label: "Order ID", width: 120 },
  { id: 3, label: "Tanggal", width: 120 },
  { id: 4, label: "Pelangan", width: 120 },
  { id: 5, label: "Product", width: 120 },
  { id: 6, label: "Jumlah", width: 120 },
  { id: 7, label: "Harga", width: 120 },
  { id: 8, label: "Ongkir", width: 120 },
  { id: 9, label: "Total Harga", width: 120 },
  { id: 10, label: "Profit", width: 120 },
  { id: 11, label: "TotalProfit", width: 120 },
];
const ReportTable = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          {" "}
          <TableRow>
            {column.map((column) => (
              <TableCell
                key={column.id}
                sx={{
                  width: column.width,
                  textAlign: "center",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <Box sx={{ width: "100%" }}>
                  <p>Tanggal: </p>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ReportTable;
