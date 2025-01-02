import express from "express";
import path from "path";
import bodyParser from "body-parser";
import userRoute from "./src/routes/userroute.js";

let app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "public")));


// Set the 'views' directory for your application
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
app.use("/user", userRoute);

app.listen(3000);
