import { IsString, IsIn, ValidateIf, IsDateString, MinLength, IsOptional, IsUUID } from 'class-validator';
export class CreateEvidenciaDto {
    @IsString()
    @MinLength(10)
    @IsOptional()
    descripcion: string;

    @IsString()
    @MinLength(10)
    @IsOptional()
    guias: string;

    @IsString()
    @IsOptional()
    fotografias: string;

    @IsUUID()
    fk_actividad: string;
}
