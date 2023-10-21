import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvidadoModule } from './convidado/convidado.module';

@Module({
  imports: [ConvidadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
