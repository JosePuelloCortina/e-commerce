import {
    Column,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { User } from "./User";
@Entity()
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    country: string

    @Column()
    city: string

    @Column()
    direction: string

    @Column()
    postal_code: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne( ()=> User, (user) => user.address)
    user: User[]
}