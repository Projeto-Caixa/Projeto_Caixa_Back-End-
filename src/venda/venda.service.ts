import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Venda } from './entities/venda.entity';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class VendaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ProductsService: ProductsService,
  ) {}
  async findAll() {
    return await this.prisma.venda.findMany();
  }

  create(createVendaDto: CreateVendaDto) {
    const venda: any = { ...createVendaDto };
    return this.prisma.venda
      .create({
        data: venda,
      })
      .catch(this.handleError);
  }
  handleError(error: Error) {
    console.log(error);
    return undefined;
  }

  async findOne(id: any) {
    const record: any = await this.prisma.venda.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o id ${id} não encontrado`);
    }
    return record;
  }

  async personalLog(id: any) {
    const totalSeller: any = [];
    const record: any = await this.prisma.venda.findMany();

    record.forEach((element) => {
      if (element.idVendedor == id) {
        totalSeller.push(element);
      }
    });

    const products: any = {};

    const productsComplete = await this.ProductsService.findAll();

    // console.log(products);
    // products.forEach((element) => {
    //   if (element.name == 'Pastel') {
    //     element.quantity = element.quantity + 10;
    //   }
    // });

    console.log(products);

    return totalSeller;

    // console.log('🚙🚛🚛🚜🚛🚛', record);

    // const record: any = await this.prisma.venda.findUnique({ where: { id } });
    // if (!record) {
    //   throw new NotFoundException(`Registro com o id ${id} não encontrado`);
    // }
    // return record;
  }

  // update(id: any, updateVendaDto: UpdateVendaDto) {
  //   return `This action updates a #${id} venda`;
  // }

  // async remove(id: any) {
  //   await this.findOne(id);
  //   await this.prisma.venda.delete({ where: { id } });
  //   return 'deletado com sucesso';
  // }

  async Deleteall() {
    await this.prisma.venda.deleteMany({});
    return 'todas as vendas foram deletadas com sucesso';
  }
}
