import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'fanta uva',
  })
  name: String;
  @ApiProperty({
    description: ' abreviação do Nome do produto',
    example: 'fanta',
  })
  nameabv: String;
  @ApiProperty({
    description: ' img do produto',
    example:
      'https://github.com/images-organization/myimages/blob/main/images-all/imgs/fanta%20uva.png?raw=true',
  })
  image: String;
  @ApiProperty({
    description: ' uma descrição do produto',
    example: 'fanta uva lata 350ml',
  })
  description: String;
  @ApiProperty({
    description: 'preço do produto',
    example: '5',
  })
  price: String;
  @ApiProperty({
    description: 'quantidade ainda disponivel do produto',
    example: '10',
  })
  quantity: Number;
}
