import { IsString, IsUUID, MinLength } from 'class-validator';
export class CreateInformeDto {
    @IsString()
    @MinLength(2)
    tipologia: string;

    @IsUUID()
    fk_usuario: string;
}