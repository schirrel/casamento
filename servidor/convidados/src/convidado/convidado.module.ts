import { Module } from '@nestjs/common';
import { ConvidadoService } from './convidado.service';
import { ConvidadoController } from './convidado.controller';

@Module({
  controllers: [ConvidadoController],
  providers: [ConvidadoService],
})
export class ConvidadoModule {}
