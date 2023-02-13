import express from "express";
import { BrandBusiness } from "../business/BrandBusiness";
import { BrandController } from "../controllers/BrandController";
import { BrandDatabase } from "../database/BrandDatabase";
import { BrandDTO } from "../dtos/BrandDTO";

export const brandRouter = express.Router();

const brandController = new BrandController(
  new BrandDTO(),
  new BrandBusiness(new BrandDTO(), new BrandDatabase())
);

brandRouter.get("/", brandController.getBrands);
brandRouter.post("/", brandController.createBrand);
brandRouter.put("/:id", brandController.editBrand);
brandRouter.delete("/:id", brandController.deleteBrand);
