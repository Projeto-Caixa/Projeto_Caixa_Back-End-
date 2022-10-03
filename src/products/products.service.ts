import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.products.findMany();
  }

  create(CreateProductDto: CreateProductDto) {
    const produto: any = { ...CreateProductDto };
    return this.prisma.products
      .create({
        data: produto,
      })
      .catch(this.handleError);
  }
  handleError(error: Error) {
    console.log(error);
    return undefined;
  }

  async findOne(id: any) {
    const record = await this.prisma.products.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`registro com o id: ${id} não encontrado`);
    }
    return record;
  }

  async update(id: any, UpdateProductDto: UpdateProductDto): Promise<any> {
    await this.findOne(id);
    const data: any = { ...UpdateProductDto };
    return this.prisma.products.update({
      data,
      where: { id },
    });
  }

  async remove(id: any) {
    await this.findOne(id);
    await this.prisma.products.delete({ where: { id } });
  }
}
