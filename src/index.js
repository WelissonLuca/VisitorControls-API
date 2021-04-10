const express = require('express');
require('dotenv').config()

const visitorsRouter = require("./routes/visitors.routes"); // Rota dos visitantes
const visitRouter = require("./routes/visit.routes"); // Rotas das visitas
const app = express();


app.use(express.json());

app.use("/", visitorsRouter); 

app.use("/", visitRouter);  



app.listen(process.env.APP_PORT, () => console.log('server is running'))


