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
        title: 'fanta',
        description: 'fanta uva lata 350ml',
        price: '5',
        image:
          'https://github.com/images-organization/myimages/blob/main/images-all/imgs/fanta%20uva.png?raw=true',
        avaliable: true,
        quantity: 2,
      },
    ],
  })
  list: [];
}
