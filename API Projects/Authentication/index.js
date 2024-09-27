import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "joemama";
const yourPassword = "joemama";
const yourAPIKey = "fa4c17e5-11d4-4f01-9c07-56164eaf4adf";
const yourBearerToken = "3556d1dd-a3eb-48a4-af69-5182d9d394e8";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "random"); //this returns an Axios object with status, headers, data, etc..
    res.render("index.ejs", { content: JSON.stringify(response.data) }); //we do result.data to access the JS object; stringify to return a string
  } catch(error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    // https://stackoverflow.com/a/74632908
    const response = await axios.get(API_URL + "all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "filter?score=5&apiKey=" + yourAPIKey);
    //OR 
    /* const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    }); */
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error){
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try{
    // https://stackoverflow.com/a/52645402
    const response = await axios.get(API_URL + "secrets/42", {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
