import { Module } from '@nestjs/common';
import { ConvidadoService } from './convidado.service';
import { ConvidadoController } from './convidado.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ConvidadoController],
  providers: [ConvidadoService],
})
export class ConvidadoModule {}
