import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
  res.render("home.ejs", { Titulo: "Blog cientifico" })
);

router.get("/about", (req, res) => res.render("About.ejs"))
export default router;
