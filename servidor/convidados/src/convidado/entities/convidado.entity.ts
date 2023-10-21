import { CreateConvidadoDto } from '../dto/create-convidado.dto';
import { UpdateConvidadoDto } from '../dto/update-convidado.dto';

export class Convidado {
  id: number;
  nome: string;
  telefone?: string;
  email?: string;
  amais?: number;

  constructor(dto: CreateConvidadoDto, id: number) {
    this.id = id;
    Object.assign(this, dto);
  }

  update(updateConvidadoDto: UpdateConvidadoDto) {
    Object.assign(this, updateConvidadoDto);
  }
}
