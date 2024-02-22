const express = require("express");
const app = express();
const { connectToMongoDB } = require("./connection");
const productRoutes = require("./routes/productRoutes")

const DBurl =
  "mongodb+srv://Sandeep59s:iMPAJmPEN72X57hs@cluster0.ab6cj8k.mongodb.net/Sandeep59s?retryWrites=true&w=majority";

connectToMongoDB(DBurl);


app.use(express.json()); // this is the middleware
app.use('/api/products' , productRoutes)

const PORT = 8081;

app.listen(PORT, () => {
  console.log("Server is running ");
});
