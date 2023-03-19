import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    return this.model.createProduct(product);
  }
}

export default ProductService;
