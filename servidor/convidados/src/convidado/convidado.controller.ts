import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConvidadoService } from './convidado.service';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { UpdateConvidadoDto } from './dto/update-convidado.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('convidado')
export class ConvidadoController {
  constructor(private readonly convidadoService: ConvidadoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Cria nova pessoal convidada',
  })
  create(@Body() createConvidadoDto: CreateConvidadoDto) {
    return this.convidadoService.create(createConvidadoDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Listal total de pessoas convidas',
  })
  findAll() {
    return this.convidadoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Retorna pessoa convida com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.convidadoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Atualiza pessoa convida com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  update(
    @Param('id') id: string,
    @Body() updateConvidadoDto: UpdateConvidadoDto,
  ) {
    return this.convidadoService.update(+id, updateConvidadoDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Deleta pessoa convida com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  remove(@Param('id') id: string) {
    return this.convidadoService.remove(+id);
  }
}
