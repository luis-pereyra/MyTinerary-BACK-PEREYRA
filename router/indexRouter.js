import { Router } from "express";
import citiesController from "../controllers/citiesController.js";

const indexRouter = Router()

const {getAllCities, getOneCity} = citiesController;

indexRouter.get("/", (req, res, next) => {
    res.send("Bienvenido a mi servidor en /api")
})

indexRouter.get("/events", getAllCities)
indexRouter.get("/one", getOneCity)

export default indexRouter