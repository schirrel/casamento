import { CreateConvidadoDto } from '../dto/create-convidado.dto';
import { UpdateConvidadoDto } from '../dto/update-convidado.dto';

export class Convidado {
  id: number;
  nome: string;
  telefone?: string;
  email?: string;
  principal?: number;
  acompanhantes?: Convidado[];

  constructor(dto: CreateConvidadoDto, id: number) {
    this.id = id;
    Object.assign(this, dto);
    if (!this.principal) this.acompanhantes = [];
  }

  update(updateConvidadoDto: UpdateConvidadoDto) {
    Object.assign(this, updateConvidadoDto);
  }
}
