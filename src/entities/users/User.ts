import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn, 
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { Role } from './Role';
import { Profile } from './Profile';
import { Address } from './Address';
import { Order } from '../orders/Order';
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ 
        nullable: false,
    })
    name: string

    @Column({
        nullable: false
    })
    last_name: string

    @Column({
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        nullable: false
    })
    password: string

    @Column({
        nullable: false
    })
    phone: string

    @Column({
        default: true,
        nullable: false
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Role, (role) => role.users)
    role: Role

    @OneToMany(() => Profile, (profile) => profile.user, {cascade: true})
    profiles: Profile[]

    @OneToMany(() => Address, (address) => address.user, {cascade: true})
    address: Address[]

    @OneToMany(() => Order, (order) => order.user, {cascade:true})
    orders: Order[]
}