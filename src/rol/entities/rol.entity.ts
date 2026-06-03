import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rol {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tipo_rol: string;

    @Column({ default: 'Activo' })
    estado: string;
}
