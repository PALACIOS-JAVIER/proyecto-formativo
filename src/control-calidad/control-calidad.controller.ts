import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlCalidadService } from './control-calidad.service';
import { CreateControlCalidadDto } from './dto/create-control-calidad.dto';
import { UpdateControlCalidadDto } from './dto/update-control-calidad.dto';

@Controller('control-calidad')
export class ControlCalidadController {
  constructor(private readonly controlCalidadService: ControlCalidadService) {}

  @Post()
  create(@Body() createControlCalidadDto: CreateControlCalidadDto) {
    return this.controlCalidadService.create(createControlCalidadDto);
  }

  @Get()
  findAll() {
    return this.controlCalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlCalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlCalidadDto: UpdateControlCalidadDto) {
    return this.controlCalidadService.update(+id, updateControlCalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlCalidadService.remove(+id);
  }
}
