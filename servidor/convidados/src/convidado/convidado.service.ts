import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { UpdateConvidadoDto } from './dto/update-convidado.dto';
import { convidados } from './convidados.mock';
import { Convidado } from './entities/convidado.entity';
@Injectable()
export class ConvidadoService {
  create(createConvidadoDto: CreateConvidadoDto) {
    const id = convidados.size + 1;
    const convidadoEntity = new Convidado(createConvidadoDto, id);
    convidados.set(id, convidadoEntity);
    return id;
  }

  findAll() {
    return Array.from(convidados).map((entry) => entry[1]);
  }

  findOne(id: number) {
    const convidadoEntity = convidados.get(id);
    if (!convidadoEntity) {
      throw new NotFoundException('Convidado não encontrado');
    }
    return convidadoEntity;
  }

  update(id: number, updateConvidadoDto: UpdateConvidadoDto) {
    const convidadoEntity = convidados.get(id);
    if (!convidadoEntity) {
      throw new NotFoundException('Convidado não encontrado');
    }
    convidados.set(id, convidadoEntity);
    convidadoEntity.update(updateConvidadoDto);
    convidados.set(id, convidadoEntity);

    return convidadoEntity;
  }

  remove(id: number) {
    if (!convidados.has(id)) {
      throw new NotFoundException('Convidado não encontrado');
    }
    return convidados.delete(id);
  }
}
