import { Injectable } from '@nestjs/common';
import { CreateTipoContratroDto } from './dto/create-tipo_contratro.dto';
import { UpdateTipoContratroDto } from './dto/update-tipo_contratro.dto';

@Injectable()
export class TipoContratroService {
  create(createTipoContratroDto: CreateTipoContratroDto) {
    return 'This action adds a new tipoContratro';
  }

  findAll() {
    return `This action returns all tipoContratro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoContratro`;
  }

  update(id: number, updateTipoContratroDto: UpdateTipoContratroDto) {
    return `This action updates a #${id} tipoContratro`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoContratro`;
  }
}
