import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn, 
    PrimaryGeneratedColumn,
    BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}