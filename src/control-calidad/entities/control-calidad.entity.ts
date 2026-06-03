import { Informe } from 'src/informe/entities/informe.entity';
import { Obligacione } from 'src/obligaciones/entities/obligacione.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class ControlCalidad {
    @PrimaryGeneratedColumn('uuid')
    id: string;     
    
    @Column({
        type: 'enum',
        enum: ['Aprobado', 'Rechazado', 'Pendiente'],
    })
    estado: string;

    @Column('date')
    fecha: Date;

    @Column('text')
    observaciones: string; 

    @Column({type:'text', nullable: true})
    firma: string;
    
    @ManyToOne(() => Informe)
    @JoinColumn({ name: 'fk_informe' })
    fk_informe: Informe;

    @ManyToOne(() => Obligacione)
    @JoinColumn({ name: 'fk_obligacion' })
    fk_obligacion: Obligacione;


}
