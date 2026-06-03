import { PartialType } from '@nestjs/mapped-types';
import { CreateControlCalidadDto } from './create-control-calidad.dto';

export class UpdateControlCalidadDto extends PartialType(CreateControlCalidadDto) {}
