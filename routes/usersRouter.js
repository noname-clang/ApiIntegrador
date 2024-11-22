import { Router } from "express";
import * as posts from "../controllers/usersController.js";
import bodyParser from "body-parser"

const router = Router();


router.post("/registro", posts.create);
router.post("/login", posts.UserLogin);
router.get("/", posts.ListAllLogins);
router.get("/cpf", posts.ListAllFromCpf);
router.get("/usd", posts.PraGringoEhMaisCaro);
router.get("/chk", posts.GringoChecker);
// router.post("/token", posts.TesteJWT);
// router.get("/:id", posts.getbyid);
// router.delete("/:id", posts.deleteinformacoes);

// router.post("/:id/imagem", bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "5mb"})  , posts.imagesend);

export default router;
