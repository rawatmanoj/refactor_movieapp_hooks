const express = require("express");
const app = express();

app.get("/", (res, req) => {});

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.listen(port);
