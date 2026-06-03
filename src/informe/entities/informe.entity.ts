import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class Informe {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    tipologia: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'fk_usuario' })
    fk_usuario: Usuario;
}
