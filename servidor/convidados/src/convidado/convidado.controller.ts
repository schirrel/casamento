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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

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

  @Get('/complete/:id')
  @ApiOkResponse({
    description: 'Retorna pessoa convida com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.convidadoService.findOneComplete(+id);
  }
  @Get(':id')
  @ApiOkResponse({
    description: 'Retorna pessoa convida com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  findOneComplete(@Param('id') id: string) {
    return this.convidadoService.findOne(+id);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Deleta pessoa convidada com o ID informado',
  })
  @ApiNotFoundResponse({
    description: 'Pessoa convidada não encontrada',
  })
  remove(@Param('id') id: string) {
    console.log(id);
    return this.convidadoService.remove(+id);
  }
}
