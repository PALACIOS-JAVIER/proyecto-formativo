import { IsString,MinLength, IsUUID } from 'class-validator';
export class CreateNovedadDto {
    @IsString()
    @MinLength(10)
    informacion: string;

    @IsUUID()
    fk_usuario: string;
    @IsUUID()
    fk_control_calidad: string;

}
