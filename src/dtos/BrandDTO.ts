import { BadRequestError } from "../errors/BadRequestError";
import { Brand } from "../models/Brand";

export interface CreateBrandInputDTO {
  id: string;
  name: string;
}

export interface CreateBrandOutputDTO {
  message: string;
  brand: {
    id: string;
    name: string;
  };
}

export interface EditBrandInputDTO {
  idToEdit: string;
  newId: string | undefined;
  newName: string | undefined;
}

export interface EditBrandOutputDTO {
  message: string;
  brand: {
    id: string;
    name: string;
  };
}
export class BrandDTO {
  public createBrandInput(id: unknown, name: unknown): CreateBrandInputDTO {
    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    const dto: CreateBrandInputDTO = {
      id,
      name,
    };
    return dto;
  }

  public createBrandOutput(brand: Brand): CreateBrandOutputDTO {
    const dto: CreateBrandOutputDTO = {
      message: "Marca registrada com sucesso",
      brand: {
        id: brand.getId(),
        name: brand.getName(),
      },
    };
    return dto;
  }

  public editBrandInput(
    idToEdit: string,
    newId: unknown,
    newName: unknown
  ): EditBrandInputDTO {
    if (newId !== undefined) {
      if (typeof newId !== "string") {
        throw new BadRequestError("'id' deve ser string");
      }
    }
    if (newName !== undefined) {
      if (typeof newName !== "string") {
        throw new BadRequestError("'name' deve ser string");
      }
    }
    const dto: EditBrandInputDTO = {
      idToEdit,
      newId,
      newName,
    };
    return dto;
  }
  public editBrandOutput(brand: Brand): EditBrandOutputDTO {
    const dto: EditBrandOutputDTO = {
      message: "Marca editada com sucesso",
      brand: {
        id: brand.getId(),
        name: brand.getName(),
      },
    };
    return dto;
  }
}
