import { IsString, IsUUID, MinLength } from 'class-validator';
export class CreateInformeGcDto {
    @IsString()
    @MinLength(2)
    nombreArchivo: string;

    @IsString()
    @MinLength(2)
    rutaArchivo: string;

    @IsString()
    @MinLength(2)
    versionGC: string;

    @IsString()
    plantilla: string;
    
    @IsUUID()
    fk_informe: string;
}

