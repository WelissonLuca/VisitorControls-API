const express = require('express');

const visitorsRouter = require("./routes/visitors.routes"); // Rota dos visitantes
const visitRouter = require("./routes/visit.routes"); // Rotas das visitas
const app = express();


app.use(express.json());

app.use("/", visitorsRouter); 

app.use("/", visitRouter);  



app.listen(3000, () => console.log('server is running'))


