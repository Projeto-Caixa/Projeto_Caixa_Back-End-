import { ApiProperty } from '@nestjs/swagger';

export class CreateVendaDto {
  @ApiProperty({
    description: 'User id',
    example: '69143544192384512394',
  })
  idVendedor: string;
  @ApiProperty({
    description: 'lista de propriedades',
    example: [
      {
        name: 'fanta laranja',
        image:
          'https://github.com/images-organization/myimages/blob/main/images-all/imgs/fanta%20uva.png?raw=true',
        price: '5',
        nameabv: 'fanta',
        quantity: 2,
        description: 'fanta uva lata 350ml',
      },
    ],
  })
  list: [];
}
