import { Router } from "express";
import articulos from "../data/articulos.js";
import posts from "../data/posts.js";
const router = Router();


//estructura del enrutador:
// router.get("/articulo/(handle del articulo de la base de datos articulos.js)", (req, res) => {
//   const post = posts[(posicion en la base de datos posts.js del articulo en especifico)];

//   res.render("articulos/articulo.ejs", { post });
// });


//si es video debe llevar articuloVideos.ejs


router.get("/", (req, res) => res.render("home.ejs", { articulos }));

router.get("/articulo/meteorologia", (req, res) => {
  //articulo
  const post = posts[0];
 
  //vista del articulo
  res.render("articulos/articulo.ejs", { post });
});

router.get("/articulo/aire", (req, res) => {
  const post = posts[1];
  res.render("articulos/articulo.ejs", { post });
});

router.get("/articulo/maremotos", (req, res) => {
  const post = posts[2];
  res.render("articulos/articulo.ejs", { post });
});

router.get("/articulo/info-pembu", (req, res) => {
  const post = posts[3];
  res.render("articulos/articulo.ejs", { post });
});

router.get("/articulo/razones-pembu", (req, res) => {
  const post = posts[4];
  res.render("articulos/articulo.ejs", { post });
});


router.get("/articulo/tormentas", (req, res) => {
  const post = posts[4];
  res.render("articulos/articuloVideos.ejs", { post });
});
router.get("/articulo/cambio-climatico", (req, res) => {
  const post = posts[5];
  res.render("articulos/articulo.ejs", { post });
});

router.get("/articulo/hielo", (req, res) => {
  const post = posts[6];
  res.render("articulos/articuloVideos.ejs", { post });
});
router.get("/articulo/lluvia-acida", (req, res) => {
  const post = posts[7];
  res.render("articulos/articulo.ejs", { post });
});


router.get("/articulo/particulas", (req, res) => {
  const post = posts[8];
  res.render("articulos/articuloVideos.ejs", { post });
});



//hacer un solo motor de plantilla para todos los tipos de archivos (fotos, videos, pdfs etc)

router.get("/about", (req, res) => res.render("About.ejs"));
export default router;
