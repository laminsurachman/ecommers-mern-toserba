import "dotenv/config";
import app from "./app.js";
import connectToDatabase from "./config/connection.js";

// Connect to the database
connectToDatabase();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
