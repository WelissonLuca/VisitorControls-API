const express = require('express');

const visitorsRouter = require("./routes/visitors.routes");

const visitRouter = require("./routes/visit.routes");
const app = express();

app.use(express.json());


app.use("/", visitorsRouter);
app.use("/", visitRouter);  



app.listen(3000, () => console.log('server is running'))