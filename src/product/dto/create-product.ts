import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProduct {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
