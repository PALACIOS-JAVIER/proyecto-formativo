import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Area } from 'src/area/entities/area.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Novedad } from 'src/novedad/entities/novedad.entity';
import { TipoContratro } from 'src/TipoContratro/entities/tipo_contratro.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @Column('text', { unique: true })
  correo_Institucional: string;

  @Column()
  cedula: number;

  @Column()
  telefono: number;

  @Column()
  contraseña: string;

  @Column({ default: 'Activo' })
  estado: string;

  @Column()
  SIIF: number;

  @Column({ nullable: true })
  objetoContrato: string;

  @ManyToOne(() => TipoContratro)
  @JoinColumn({ name: 'fk_codigo_contrato' })
  fk_codigo_contrato: TipoContratro;

  @ManyToOne(() => Area)
  @JoinColumn({ name: 'fk_area' })
  area: Area;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'fk_rol' })
  rol: Rol;

  @ManyToOne(() => Novedad)
  @JoinColumn({ name: 'fk_novedad' })
  novedad: Novedad;

  @BeforeInsert()
  async hashPassword() {
    this.contraseña = await bcrypt.hash(this.contraseña, 10);
  }

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.correo_Institucional = this.correo_Institucional.toLowerCase().trim();
  }
}
