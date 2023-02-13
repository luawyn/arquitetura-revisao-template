import { BrandDatabase } from "../database/BrandDatabase";
import {
  CreateBrandInputDTO,
  EditBrandInputDTO,
  BrandDTO,
} from "../dtos/BrandDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Brand } from "../models/Brand";
import { BrandDB } from "../types";

export class BrandBusiness {
  constructor(
    private brandDTO: BrandDTO,
    private brandDatabase: BrandDatabase
  ) {}
  public getBrands = async (input: any) => {
    const { q } = input;

    const brandsDB = await this.brandDatabase.findBrand(q);

    const brands: Brand[] = brandsDB.map(
      (brandDB) => new Brand(brandDB.id, brandDB.name)
    );

    return brands;
  };

  public createBrand = async (input: CreateBrandInputDTO) => {
    const { id, name } = input;

    if (name.length < 2) {
      throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres");
    }

    const brandDBExists = await this.brandDatabase.findBrandById(id);

    if (brandDBExists) {
      throw new BadRequestError("'id' já existe");
    }

    const newBrand = new Brand(id, name);

    const newBrandDB: BrandDB = {
      id: newBrand.getId(),
      name: newBrand.getName(),
    };

    await this.brandDatabase.insertBrand(newBrandDB);

    const output = this.brandDTO.createBrandOutput(newBrand);

    return output;
  };

  public editBrand = async (input: EditBrandInputDTO) => {
    const { idToEdit, newId, newName } = input;
    if (newName.length < 2) {
      throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres");
    }

    const brandToEditDB = await this.brandDatabase.findBrandById(idToEdit);

    if (!brandToEditDB) {
      throw new NotFoundError("'id' para editar não existe");
    }

    const brand = new Brand(brandToEditDB.id, brandToEditDB.name);

    newId && brand.setId(newId);
    newName && brand.setName(newName);

    const updatedBrandDB: BrandDB = {
      id: brand.getId(),
      name: brand.getName(),
    };

    await this.brandDatabase.updateBrand(updatedBrandDB);

    const output = this.brandDTO.editBrandOutput(brand);
    return output;
  };

  public deleteBrand = async (input: any) => {
    const { idToDelete } = input;

    const brandToDeleteDB = await this.brandDatabase.findBrandById(idToDelete);

    if (!brandToDeleteDB) {
      throw new NotFoundError("'id' para deletar não existe");
    }

    await this.brandDatabase.deleteBrandById(brandToDeleteDB.id);

    const output = {
      message: "Marca deletado com sucesso",
    };

    return output;
  };
}
