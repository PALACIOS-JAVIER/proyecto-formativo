import { IsIn, IsString, IsDate, IsOptional, IsUUID } from 'class-validator';
export class CreateControlCalidadDto {

    @IsString()
    @IsIn(['Aprobado', 'Rechazado', 'Pendiente'])
    estado: string;

    @IsDate()
    fecha: Date;

    @IsString()
    @IsOptional()
    observaciones: string;


    @IsUUID()
    fk_informe: string;

    @IsUUID()
    fk_obligacion: string;


}
