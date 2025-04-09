import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateProduct } from './create-product';

@InputType()
export class UpdateProduct extends PartialType(CreateProduct) {
  @Field(() => Int)
  id: number;
}
