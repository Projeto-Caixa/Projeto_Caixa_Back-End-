import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'X-Santo-Antonio',
  })
  name: String;
  @ApiProperty({
    description: 'Nome abreviado do produto',
    example: 'X-Sto',
  })
  title: String;

  @ApiProperty({
    description: 'icone preto e branco do produto para impresão',
    example: 'https://google.com/google.jpg',
  })
  icon: String;

  @ApiProperty({
    description: 'Breve descrição do produto',
    example: 'Pão com carnes no tacho',
  })
  description: String;
  @ApiProperty({
    description: 'Valor do produto',
    example: 12,
  })
  price: Number;
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://levesabor.com.br/media/25/sanduiche-carne-de-panela.png',
  })
  image: String;
  @ApiProperty({
    description: 'quantidade ainda disponivel do produto',
    example: 10,
  })
  quantity: Number;

  @ApiProperty({
    description: 'Se o produto esta em estoque',
    example: true,
  })
  avaliable: String;
}
