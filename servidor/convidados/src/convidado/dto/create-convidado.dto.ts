import { ApiProperty } from '@nestjs/swagger';

export class CreateConvidadoDto {
  @ApiProperty({
    type: String,
    description: 'Nome da pessoa convidada',
  })
  readonly nome: string;
  @ApiProperty({
    type: String,
    description: 'Telefone da pessoa convidada',
  })
  readonly telefone: string;
  @ApiProperty({
    type: String,
    description: 'Email da pessoa convidada',
    required: false,
  })
  readonly email?: string;
  @ApiProperty({
    type: String,
    description: 'ID do convidado principal caso convidado seja acompanhante',
    required: false,
  })
  readonly principal: number;
}
