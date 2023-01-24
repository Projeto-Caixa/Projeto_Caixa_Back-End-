import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendaService } from './venda.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Venda')
@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new sale',
  })
  create(@Body() createVendaDto: CreateVendaDto) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all  sales',
  })
  findAll() {
    return this.vendaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find sale by id',
  })
  findOne(@Param('id') id: string) {
    return this.vendaService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVendaDto: UpdateVendaDto) {
  //   return this.vendaService.update(id, updateVendaDto);
  // }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a sale',
  })
  remove(@Param('id') id: string) {
    return this.vendaService.remove(id);
  }
}
