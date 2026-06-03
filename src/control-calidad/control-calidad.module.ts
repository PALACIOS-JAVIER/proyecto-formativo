import { Module } from '@nestjs/common';
import { ControlCalidadService } from './control-calidad.service';
import { ControlCalidadController } from './control-calidad.controller';

@Module({
  controllers: [ControlCalidadController],
  providers: [ControlCalidadService],
})
export class ControlCalidadModule {}
