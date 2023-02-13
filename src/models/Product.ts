export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private brandId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(value: number): void {
    this.price = value;
  }

  public getBrandId(): string {
    return this.brandId;
  }

  public setBrandId(value: string): void {
    this.brandId = value;
  }
}
