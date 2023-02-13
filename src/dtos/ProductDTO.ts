import { BadRequestError } from "../errors/BadRequestError";
import { Product } from "../models/Product";

export interface CreateProductInputDTO {
  id: string;
  name: string;
  price: number;
}

export interface CreateProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    brandId: string;
  };
}

export interface EditProductInputDTO {
  idToEdit: string;
  newId: string | undefined;
  newName: string | undefined;
  newPrice: number | undefined;
  newBrandId: string | undefined;
}

export interface EditProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    brandId: string;
  };
}
export class ProductDTO {
  public createProductInput(
    id: unknown,
    name: unknown,
    price: unknown
  ): CreateProductInputDTO {
    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof price !== "number") {
      throw new BadRequestError("'price' deve ser number");
    }

    const dto: CreateProductInputDTO = {
      id,
      name,
      price,
    };
    return dto;
  }

  public createProductOutput(product: Product): CreateProductOutputDTO {
    const dto: CreateProductOutputDTO = {
      message: "Produto registrado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        brandId: product.getBrandId(),
      },
    };
    return dto;
  }

  public editProductInput(
    idToEdit: string,
    newId: unknown,
    newName: unknown,
    newPrice: unknown,
    newBrandId: unknown
  ): EditProductInputDTO {
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
    if (newPrice !== undefined) {
      if (typeof newPrice !== "number") {
        throw new BadRequestError("'price' deve ser number");
      }
    }
    if (newBrandId !== undefined) {
      if (typeof newBrandId !== "string") {
        throw new BadRequestError("'createdAt' deve ser string");
      }
    }
    const dto: EditProductInputDTO = {
      idToEdit,
      newId,
      newName,
      newPrice,
      newBrandId,
    };
    return dto;
  }
  public editProductOutput(product: Product): EditProductOutputDTO {
    const dto: EditProductOutputDTO = {
      message: "Produto editado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        brandId: product.getBrandId(),
      },
    };
    return dto;
  }
}
