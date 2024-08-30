import { Paper, Table, TableHead, TableRow, TableCell } from "@mui/material";

const column = [
  { id: 1, label: "No", width: 30 },
  { id: 2, label: "ID", width: 30 },
  { id: 3, label: "Avatar", width: 120 },
  { id: 4, label: "Nama", width: 120 },
  { id: 5, label: "Email", width: 120 },
  { id: 6, label: "No Handphone", width: 120 },
  { id: 7, label: "Action", width: 120 },
];
const UsersTable = () => {
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
      </Table>
    </Paper>
  );
};

export default UsersTable;
