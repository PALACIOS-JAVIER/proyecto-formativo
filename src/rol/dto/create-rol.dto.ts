import { IsString, IsEmail, IsNumber, IsInt, MinLength, IsIn, IsOptional } from 'class-validator';
export class CreateRolDto {
    @IsString()
    @MinLength(3)
    tipo_rol: string;

    @IsIn(['Activo', 'Inactivo'])
    @IsOptional()
    @IsString()
    estado: string;

}
