import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => { //we do "/" bc the page we want to handle is the home page
    // console.log(req);
    res.send("<h1>Hello!</h1>");
});

//requests and responses for Postman backend testing
app.post("/register", (req, res) => {
   //Do something with the data
   res.sendStatus(201); //Created
});
  
app.put("/user/angie", (req, res) => {
  res.sendStatus(200); //OK
});
  
app.patch("/user/angie", (req, res) => {
  res.sendStatus(200); //OK
});
  
app.delete("/user/angie", (req, res) => {
  //Deleting user
  res.sendStatus(200); //OK     
});
  
app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/contact",(req,res) => {
    res.send("<h1>Contact</h1>");
});
app.listen(port, () => { //port
    console.log(`Server running on port ${port}.`); //callback
});