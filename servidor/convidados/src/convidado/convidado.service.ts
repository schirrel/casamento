import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { ConvidadoComplete } from './entities/convidadoComplete.entity';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ConvidadoService {
  @Inject(DatabaseService)
  private readonly databaseService: DatabaseService;

  async create(createConvidadoDto: CreateConvidadoDto) {
    try {
      const result = await this.databaseService.create([
        createConvidadoDto.nome,
        createConvidadoDto.telefone,
        createConvidadoDto.email,
        createConvidadoDto.principal,
      ]);
      if (!result.rowCount) {
        throw new NotFoundException('Convidado não pode ser criado.');
      }
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Convidado não pode ser criado.');
    }
  }

  async findAll() {
    try {
      const result = await this.databaseService.findAll();
      return result.rows;
    } catch (e) {
      return [];
    }
  }

  async findOneComplete(id: number) {
    try {
      const result = await this.databaseService.findComplete(id);
      const complete = new ConvidadoComplete(result.rows).toConvidado();
      return complete;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Convidado não encontrado');
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.databaseService.findComplete(id);
      return result.rows;
    } catch (e) {
      throw new NotFoundException('Convidado não encontrado');
    }
  }

  async remove(id: number) {
    const result = await this.databaseService.delete(id);
    if (!result.rowCount) {
      throw new NotFoundException('Convidado não encontrado');
    }
  }
}
