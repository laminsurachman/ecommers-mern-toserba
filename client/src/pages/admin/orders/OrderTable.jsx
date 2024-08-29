import { Paper, Table, TableHead, TableRow, TableCell } from "@mui/material";
const column = [
  { id: 1, label: "No", width: 30 },
  { id: 2, label: "Order Id", width: 30 },
  { id: 3, label: "Pelanggan", width: 120 },
  { id: 4, label: "Tagihan", width: 120 },
  { id: 5, label: "Status", width: 120 },
  { id: 6, label: "Penggiriman", width: 120 },
  { id: 7, label: "No Telephone", width: 30 },
  { id: 8, label: "Resi", width: 30 },

  { id: 9, label: "Action", width: 120 },
];
const OrderTable = () => {
  return (
    <Paper>
      {" "}
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
      </Table>
    </Paper>
  );
};

export default OrderTable;
