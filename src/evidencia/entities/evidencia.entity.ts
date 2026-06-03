import { Actividad } from 'src/actividad/entities/actividad.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Evidencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ type: 'text', nullable: true })
    guias: string;

    @Column({ type: 'text', nullable: true })
    fotografias: string;

    @ManyToOne(() => Actividad)
    @JoinColumn({ name: 'fk_actividad' })
    fk_actividad: Actividad;
}
