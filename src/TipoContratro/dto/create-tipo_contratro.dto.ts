import { IsDate, IsIn, IsString, IsUUID } from 'class-validator';

export class CreateTipoContratroDto {

    @IsDate()
    fecha_inicio: Date;

    @IsDate()
    fecha_fin: Date;

    @IsString()
    @IsIn(['Activo', 'Terminado'])
    estado: string;

    @IsUUID()
    fk_contrato: string;

}
