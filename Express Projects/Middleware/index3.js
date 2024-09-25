import express from "express";

const app = express();
const port = 3000;

//Middleware Creation
function logger(req,res,next){
  console.log("Request Method: " , req.method);
  console.log("Request URL: " , req.url);
  next(); //to continue onto the other app methods
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});