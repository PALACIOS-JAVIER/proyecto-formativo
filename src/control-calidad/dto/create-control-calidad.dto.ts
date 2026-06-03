import { IsIn, IsString, IsDate, IsOptional, IsUUID, ValidateIf } from 'class-validator';
import { isSetIterator } from 'util/types';
export class CreateControlCalidadDto {

    @IsString()
    @IsIn(['Aprobado', 'Rechazado', 'Pendiente'])
    estado: string;

    @IsDate()
    fecha: Date;

    @ValidateIf(o => o.estado === 'Rechazado')
    @IsString()
    observaciones: string;

    @ValidateIf(o => o.estado === 'Aprobado')
    @IsString()
    Firma: string;

    @IsUUID()
    fk_informe: string;

    @IsUUID()
    fk_obligacion: string;


}
