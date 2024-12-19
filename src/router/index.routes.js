import { Router } from "express";


const router = Router();


// routes
router.get("/", (req, res) => {
	res.render("home");
});

router.get("/country/:id", (req, res) => {
    res.render("country");
});

router.post("/country", (req, res) => {    
    // manipulation des données du formulaires
    console.log("on country POST route", req.body);

    // redirection vers une page spécifique
    // redirect déclenche sur le serveur une requête en méthode GET
    res.redirect("/send");
});

router.get("/send", (req, res) => {
    res.send("Data sent");
})


router.get("/*", (req, res) => {
    res.send("PAGE NOT FOUND");
});




export default router;