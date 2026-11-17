const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views",__dirmame);


app.get("/", (req, res) => {
  res.sendFile(__dirname+"/buyme.html");
});


app.use("/", routes);

app.listen(PORT, () => {
  console.log('Server running at http://localhost:3000/');
});
