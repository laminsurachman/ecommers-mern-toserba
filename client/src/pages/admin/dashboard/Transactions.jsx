import {
  Box,
  Container,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const column = [
  { id: 1, label: "No", width: 30 },
  { id: 2, label: "Order", width: 100 },
  { id: 3, label: "Pelanggan", width: 150 },
  { id: 4, label: "Tagihan", width: 150 },
  { id: 5, label: "Tanggal", width: 150 },
  { id: 6, label: "Status", width: 150 },
  { id: 7, label: "Pengiriman", width: 150 },
  { id: 8, label: "Alamat", width: 250 },
];

const Transactions = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "75%",
        borderRadius: "5px",
        boxShadow: 3,
        p: 1,
      }}
    >
      <Paper>
        <Table>
          <TableHead>
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
        </Table>
      </Paper>
    </Box>
  );
};

export default Transactions;
