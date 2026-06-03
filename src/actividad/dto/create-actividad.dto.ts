import {IsString, IsDateString, IsIn, MinLength, ValidateIf } from 'class-validator';
export class CreateActividadDto {

    @IsString()
    @IsIn(['Aplica', 'NoAplica'])
    estado: string;
    
    @ValidateIf(o => o.estado === 'Aplica')
    @IsDateString()
    fechaInicio: Date;

    @ValidateIf(o => o.estado === 'Aplica')
    @IsDateString()
    fechaFin: Date;

    @ValidateIf(o => o.estado === 'Aplica')
    @IsString()
    @MinLength(10)
    resultado: string;

    @ValidateIf(o => o.estado === 'Aplica')
    @IsString()
    @MinLength(10)
    competencia: string;

    @IsString()
    fk_informeGC: string;
}

