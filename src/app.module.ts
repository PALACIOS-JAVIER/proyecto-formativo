import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AreaModule } from './area/area.module';
import { RolModule } from './rol/rol.module';
import { NovedadModule } from './novedad/novedad.module';
import { TipoContratroModule } from './TipoContratro/tipo_contratro.module';
import { ObligacionesModule } from './obligaciones/obligaciones.module';
import { ControlCalidadModule } from './control-calidad/control-calidad.module';
import { InformeModule } from './informe/informe.module';
import { InformeGfModule } from './informe-gf/informe-gf.module';
import { InformeGcModule } from './informe-gc/informe-gc.module';
import { ActividadModule } from './actividad/actividad.module';
import { EvidenciaModule } from './evidencia/evidencia.module';

@Module({
  imports: [UsuarioModule, AreaModule, RolModule, NovedadModule, TipoContratroModule, ObligacionesModule, ControlCalidadModule, InformeModule, InformeGfModule, InformeGcModule, ActividadModule, EvidenciaModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
