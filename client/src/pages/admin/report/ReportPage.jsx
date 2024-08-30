import { Box, Button, Typography } from "@mui/material";
import AdminBar from "../components/Appbar/AdminBar";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReportTable from "./ReportTable";

const DateButton = forwardRef(({ value, onClick }, ref) => (
  <Button variant="contained" color="primary" onClick={onClick} ref={ref}>
    {value}
  </Button>
));

const ReportPage = () => {
  const [today, setToday] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, []);
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        {" "}
        <Box
          sx={{ display: "flex", width: 400, justifyContent: "space-evenly" }}
        >
          {/*start */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {" "}
            <Typography align="center" fontWeight="bold">
              dari
            </Typography>
            <DatePicker
              closeOnScroll={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<DateButton />}
              dateFormat={"dd/MM/yyyy"}
              maxDate={today}
            />
          </Box>{" "}
          {/*end*/}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography align="center" fontWeight="bold">
              sampai
            </Typography>{" "}
            <DatePicker
              closeOnScroll={true}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<DateButton />}
              dateFormat={"dd/MM/yyyy"}
              maxDate={today}
            />
          </Box>
        </Box>
        <Button variant="contained" color="success">
          Dounloud
        </Button>
      </Box>
      <ReportTable />
    </Box>
  );
};

export default ReportPage;
