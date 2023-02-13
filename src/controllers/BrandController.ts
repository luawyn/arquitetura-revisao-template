import { Request, Response } from "express";
import { BrandBusiness } from "../business/BrandBusiness";
import { BaseError } from "../errors/BaseError";
import { BrandDTO } from "../dtos/BrandDTO";

export class BrandController {
  constructor(
    private brandDTO: BrandDTO,
    private brandBusiness: BrandBusiness
  ) {}
  public getBrands = async (req: Request, res: Response) => {
    try {
      const input = {
        q: req.query.q,
      };

      const output = await this.brandBusiness.getBrands(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public createBrand = async (req: Request, res: Response) => {
    try {
      const input = this.brandDTO.createBrandInput(req.body.id, req.body.name);

      const output = await this.brandBusiness.createBrand(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public editBrand = async (req: Request, res: Response) => {
    try {
      const input = this.brandDTO.editBrandInput(
        req.params.id,
        req.body.id,
        req.body.name
      );

      const output = await this.brandBusiness.editBrand(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public deleteBrand = async (req: Request, res: Response) => {
    try {
      const input = {
        idToDelete: req.params.id,
      };
      const output = await this.brandBusiness.deleteBrand(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
