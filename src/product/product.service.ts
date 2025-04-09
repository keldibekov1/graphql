import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProduct } from './dto/update-product';
import { CreateProduct } from './dto/create-product';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProduct) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateProduct) {
    return this.prisma.product.update({ where: { id }, data });
  }
t
  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
