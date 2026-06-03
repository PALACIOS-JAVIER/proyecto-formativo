import { Injectable } from '@nestjs/common';
import { CreateControlCalidadDto } from './dto/create-control-calidad.dto';
import { UpdateControlCalidadDto } from './dto/update-control-calidad.dto';

@Injectable()
export class ControlCalidadService {
  create(createControlCalidadDto: CreateControlCalidadDto) {
    return 'This action adds a new controlCalidad';
  }

  findAll() {
    return `This action returns all controlCalidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlCalidad`;
  }

  update(id: number, updateControlCalidadDto: UpdateControlCalidadDto) {
    return `This action updates a #${id} controlCalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlCalidad`;
  }
}
