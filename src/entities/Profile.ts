import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}