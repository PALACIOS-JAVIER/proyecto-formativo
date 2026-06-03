import { Module } from '@nestjs/common';
import { TipoContratroService } from './tipo_contratro.service';
import { TipoContratroController } from './tipo_contratro.controller';

@Module({
  controllers: [TipoContratroController],
  providers: [TipoContratroService],
})
export class TipoContratroModule {}
