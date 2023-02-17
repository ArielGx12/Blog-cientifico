import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";


//importacion de las rutas
import rutas from "./Routes/index.js";

//inicializando servidor
const app = express();

//ajustando directorios de carpetas
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("Posts", join(__dirname, "views/Posts") )


//Ajustando las vistas HTML
app.set("view engine", 'ejs');



//usando las rutas
app.use(rutas);

//static files(css, imagenes, js etc)
app.use(express.static(join(__dirname, 'public')))

//Puerto del servidor
app.listen(3000);
console.log("This server is running successfully on port 3000. In your browser, type 'localhost:3000' for view page ");

