import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Venda } from './entities/venda.entity';

@Injectable()
export class VendaService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.venda.findMany();
  }

  create(createVendaDto: CreateVendaDto) {
    const venda: Venda = { ...createVendaDto };
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

  // update(id: any, updateVendaDto: UpdateVendaDto) {
  //   return `This action updates a #${id} venda`;
  // }

  async remove(id: any) {
    await this.findOne(id);
    await this.prisma.venda.delete({ where: { id } });
    return 'deletado com sucesso';
  }
}
