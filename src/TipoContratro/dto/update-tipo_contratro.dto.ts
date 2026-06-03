import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoContratroDto } from './create-tipo_contratro.dto';

export class UpdateTipoContratroDto extends PartialType(CreateTipoContratroDto) {}
