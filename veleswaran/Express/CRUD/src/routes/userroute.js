import express from "express";
import {
  adduser,
  deleteUser,
  showUsers,
} from "../controller/usercontroller.js";
import multer from "multer";
import path from "path";
import crypto from "crypto";

let userRoute = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images")); // Set your desired upload destination
  },
  filename: (req, file, cb) => {
    let extension = file.originalname.split(".").pop();
    let random = crypto.randomBytes(8).toString("hex");
    let filename = `${Date.now()}_${random}.${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

userRoute.get("/list", async (req, res) => {
    let users = await showUsers();
    console.log(users);
    res.render("users/list.ejs", { users });
});

userRoute.get("/create", (req, res) => {
    res.render("users/create.ejs");
});

userRoute.post("/store", upload.single("image"), async (req, res) => {
    let data = req.body;
    const imageFileName = req.file.filename;
    data.image = imageFileName;
    await adduser(data);
    res.redirect("/user/list");
});

userRoute.get("/delete/:id", async (req, res) => {
    let id = req.url.split("/").pop();
    await deleteUser(id);
    res.redirect("/user/list");
});

export default userRoute;
