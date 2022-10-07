const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const { UserRouter, AuthRouter , HealthRouter, PageRouters} = require("./router")

app.use(UserRouter);
app.use(AuthRouter);
app.use(HealthRouter);
app.use(PageRouters);
app.listen(port, () => console.log(`server running in port: ${port}`));