import { IsString, IsUUID, MinLength } from 'class-validator';
export class CreateInformeGfDto {

    @IsString()
    @MinLength(2)
    nombreArchivo: string;
    @IsString()
    rutaArchivo: string;
    @IsString()
    versionGF: string;
    @IsUUID()
    fk_informe: string;

}
