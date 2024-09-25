import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const day = new Date();
    const today = day.getDay();
    console.log(today);
    let type = "a weekday";
    let adv = "it's time to work hard";
    
    if(today === 0 || today === 6){
        type = "a weekend";
        adv = "it's time to have fun";  
    }
    res.render("index.ejs",
       { 
        dayType: type,
        advice: adv
        }
    );  
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
