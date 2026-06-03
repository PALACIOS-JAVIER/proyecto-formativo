import { Informe } from 'src/informe/entities/informe.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class InformeGf {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    nombreArchivo: string;

    @Column('text', { unique: true })
    rutaArchivo: string;

    @Column('text', { unique: true })
    versionGF: string; 

    @ManyToOne(() => Informe)
    @JoinColumn({ name: 'fk_informe' })
    fk_informe: Informe;
}
