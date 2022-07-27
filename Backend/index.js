const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

//create a express server
app.listen(4000, () => {
    console.log("server is started");
})


// app.get("/:userID", (req, res) => {
//     const userNO = req.params.userID;
//     res.send(`hello post ${userNO}`);
// })
app.use(cors());
app.use(express.json());
app.use("/categories",require("./routes/categories"));
app.use("/task",require("./routes/task"));


// connection to databse
conn.connection.on("connected", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("connected to database")
    }
})