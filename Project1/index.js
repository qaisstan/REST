const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello from the building a Rest API in JavaScript with Express course!"
  );
});

app.listen(port, () =>
  console.log(`Running the Sample1 app. We are listening on port ${port}`)
);
