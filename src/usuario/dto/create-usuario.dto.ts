import { IsString, IsEmail, IsNumber, IsInt, MinLength, IsIn, IsOptional, IsUUID } from 'class-validator';

export class CreateUsuarioDto {

    @IsString()
    @MinLength(5)
    name: string;

    @IsEmail()
    correo_Institucional: string;

    @IsNumber()
    cedula: number;

    @IsNumber()
    @IsInt()
    telefono: number;

    @IsString()
    @MinLength(8)
    contraseña: string;

    @IsIn(['Activo', 'Inactivo'])
    @IsOptional()
    @IsString()
    estado: string;

    @IsNumber()
    @IsInt()
    SIIF: number;

    @IsString()
    @IsOptional()
    @MinLength(10)
    objetoContrato: string;

    @IsString()
    @IsUUID()
    fk_codigo_contrato: string;
    @IsUUID() 
    fk_area: string;
    @IsUUID()
    fk_rol: string;
    @IsUUID()
    fk_novedad: string;
}
