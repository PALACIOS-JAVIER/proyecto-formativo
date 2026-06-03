import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TipoContratro {
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  fecha_inicio: Date;

  @Column('date')
  fecha_fin: Date;

  @Column('text', { default: 'Activo' })
  estado: string;

  @Column('text', { unique: true })
  codigo_contrato: string;

}
