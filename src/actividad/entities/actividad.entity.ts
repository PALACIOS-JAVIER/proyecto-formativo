import { InformeGc } from 'src/informe-gc/entities/informe-gc.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Actividad {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['Aplica', 'NoAplica'],
  })
  estado: string;

  @Column({ type: 'date', nullable: true })
  fechaInicio: Date;

  @Column({ type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ type: 'text', nullable: true })
  resultado: string;

  @Column({ type: 'text', nullable: true })
  competencia: string;

  @ManyToOne(() => InformeGc)
  @JoinColumn({ name: 'fk_informeGC' })
  informeGC: InformeGc;
}