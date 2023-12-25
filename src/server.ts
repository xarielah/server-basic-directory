import express from "express";
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("port 80 is working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
