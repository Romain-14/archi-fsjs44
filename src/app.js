// on active nos variables d'environnement en premier
import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

// gestion du port
// soit le la var d'env existe (service cloud) soit on utilise la notre
const PORT = process.env.PORT || process.env.LOCAL_PORT;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

// pour récupérer les données d'un formulaire simple, on va utiliser le middleware suivant afin de placer les données envoyés dans l'objet "body" de l'objet "request"
app.use(express.urlencoded({extended: false}));

// on délègue la gestion des routes à un router spécialisé (et son fichier) via un middleware
app.use(router);

app.listen(PORT, () =>
	console.log(
		`running at http://${process.env.DOMAIN}:${PORT}`
	)
);
