import { TipoContratro } from 'src/TipoContratro/entities/tipo_contratro.entity';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Obligacione {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    descripcion: string;

    @ManyToOne(() => TipoContratro)
    @JoinColumn({ name: 'fk_contrato' })
    fk_contrato: TipoContratro;

}
