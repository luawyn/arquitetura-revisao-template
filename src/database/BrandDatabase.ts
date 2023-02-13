import { BrandDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase {
  public static TABLE_BRANDS = "brands";

  public async findBrand(q: string | undefined) {
    if (q) {
      const result: BrandDB[] = await BaseDatabase.connection(
        BrandDatabase.TABLE_BRANDS
      ).where("name", "LIKE", `%${q}%`);

      return result;
    } else {
      const result: BrandDB[] = await BaseDatabase.connection(
        BrandDatabase.TABLE_BRANDS
      );

      return result;
    }
  }

  public async findBrandById(id: string) {
    const [BrandDB]: BrandDB[] | undefined[] = await BaseDatabase.connection(
      BrandDatabase.TABLE_BRANDS
    ).where({
      id,
    });

    return BrandDB;
  }

  public async insertBrand(newBrandDB: BrandDB) {
    await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS).insert(
      newBrandDB
    );
  }

  public async updateBrand(BrandDB: BrandDB) {
    await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS)
      .update(BrandDB)
      .where({ id: BrandDB.id });
  }

  public async deleteBrandById(id: string) {
    await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS)
      .delete()
      .where({ id });
  }
}
