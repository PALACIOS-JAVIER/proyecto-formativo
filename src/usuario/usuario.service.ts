import { Injectable, InternalServerErrorException, Logger, BadRequestException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  private readonly logger = new Logger('UsuarioService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const {
        fk_codigo_contrato,
        fk_area,
        fk_rol,
        fk_novedad,
        ...rest
      } = createUsuarioDto;

      const usuario = this.usuarioRepository.create({
        ...rest,
        fk_codigo_contrato: { id: fk_codigo_contrato },
        area: { id: fk_area },
        rol: { id: fk_rol },
        novedad: { id: fk_novedad },
      });

      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

    private handleDBExceptions(error: any){

          if ((error as any).code === '23505') {
        throw new BadRequestException((error as any).detail);
      }
      this.logger.error(error)
      throw new InternalServerErrorException('Error desconosido, revise el log del servidor.');
  }
}
