const { Router } = require("express")

const PageRouters = Router();
const middlewareValidarJWT = require("../midleware/auth-middleware");

PageRouters.get("/home", middlewareValidarJWT,  (req, res) =>{
  console.log("to aqui");
   res.render("pages/index", {title: "Sales Ticket"});
})

PageRouters.get("/ticket", middlewareValidarJWT, (req, res) => {
  res.render("pages/ticket", {title: "Criar Ticket"})
})

PageRouters.get("/events", middlewareValidarJWT, (req, res) =>{
  res.render("pages/events", {title: "Eventos"})
})

PageRouters.get("/events/:events/clients", middlewareValidarJWT, (req, res) =>{
  res.render("pages/clients", {title: "Eventos"})
})

PageRouters.get('/login', (req, res) => {
  res.render('pages/login.ejs', {title: "Sales Ticket"});
})

module.exports = PageRouters;