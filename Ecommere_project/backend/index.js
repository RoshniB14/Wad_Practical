

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/users", require("./Routes/authRoutes"));
app.use("/api/products", require("./Routes/productRoutes"));  
app.use("/api/cart", require("./Routes/cartRoutes"));  
app.use("/api/orders", require("./Routes/orderRoutes"));  


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
