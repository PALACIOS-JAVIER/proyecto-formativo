import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { Informe } from 'src/informe/entities/informe.entity';

@Entity()
export class InformeGc {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    nombreArchivo: string;

    @Column('text', { unique: true })
    rutaArchivo: string;

    @Column('text', { unique: true })
    versionGC: string;

    @Column('text')
    plantilla: string;

    @ManyToOne(() => Informe)
    @JoinColumn({ name: 'fk_informe' })
    fk_informe: Informe;
}
