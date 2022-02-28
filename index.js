const express = require("express");
const app = express();
const product = require("./api/speechtotext");

app.use(express.json({ extended: false }));

app.use("/api/speechtotext", product);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running in port ${PORT}'));
