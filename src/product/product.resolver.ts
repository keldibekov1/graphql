import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UpdateProduct } from './dto/update-product';
import { Product } from './entity/product.entity';
import { CreateProduct } from './dto/create-product';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args('createProduct') input: CreateProduct) {
    return this.productService.create(input);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProduct') input: UpdateProduct) {
    return this.productService.update(input.id, input);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}
