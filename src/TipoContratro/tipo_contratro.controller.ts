import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoContratroService } from './tipo_contratro.service';
import { CreateTipoContratroDto } from './dto/create-tipo_contratro.dto';
import { UpdateTipoContratroDto } from './dto/update-tipo_contratro.dto';

@Controller('tipo-contratro')
export class TipoContratroController {
  constructor(private readonly tipoContratroService: TipoContratroService) {}

  @Post()
  create(@Body() createTipoContratroDto: CreateTipoContratroDto) {
    return this.tipoContratroService.create(createTipoContratroDto);
  }

  @Get()
  findAll() {
    return this.tipoContratroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoContratroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoContratroDto: UpdateTipoContratroDto) {
    return this.tipoContratroService.update(+id, updateTipoContratroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoContratroService.remove(+id);
  }
}
