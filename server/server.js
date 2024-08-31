import "dotenv/config";
import app from "./app.js";

app.get("/", (req, res) => {
  res.send("server aktif");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server aktif di port ${port}`);
});
