import { PartialType } from '@nestjs/swagger';
import { CreateConvidadoDto } from './create-convidado.dto';

export class UpdateConvidadoDto extends PartialType(CreateConvidadoDto) {}
