const express = require("express");
const cors = require("cors");

const divisionRoutes = require("./routes/divisionRoutes");
const districtRoutes = require("./routes/districtRoutes");
const upazilaRoutes = require("./routes/upazilaRoutes");
const unionRoutes = require("./routes/unionRoutes");
const db = require("./DbManager/DB");

// create express instance
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// division routes
app.use("/division", divisionRoutes);

// district routes

app.use("/district", districtRoutes);

// upazila routes
app.use("/upazila", upazilaRoutes);

// union routes

app.use("/union", unionRoutes);

// get all division, district, upzila, union count


// async function connect() {
//     try {
//         await db.authenticate();
//         console.log('connection successfull');
//     } catch (error) {
//         console.log('error ' + error);
//     }
// }
// connect();

app.get("/", (req, res) => {
    res.render('index')
});

// create server

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
