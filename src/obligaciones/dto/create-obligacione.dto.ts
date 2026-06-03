import { IsString, IsUUID } from 'class-validator';

export class CreateObligacioneDto {
    @IsString()
    descripcion: string;

    @IsUUID()
    fk_codigo_contrato: string;

}
