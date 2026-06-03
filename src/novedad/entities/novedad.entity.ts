import { ControlCalidad } from 'src/control-calidad/entities/control-calidad.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Novedad {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    informacion: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'fk_usuario' })
    usuario: Usuario;

    @ManyToOne(() => ControlCalidad)
    @JoinColumn({ name: 'fk_version' })
    version: ControlCalidad;

}
