import { Router } from "express";
import {
  getProffesor,
  getProffesors,
} from "../controller/proffesors.controller.js";

const router = Router();

router.get("/proffesors", getProffesors);

router.get("/proffesors/:id", getProffesor);

export default router;
