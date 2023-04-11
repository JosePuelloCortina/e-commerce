import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn, 
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import { Role } from './Role';
import { Profile } from './Profile';
import { Address } from './Address';
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

    @Column()
    password: string

    @Column()
    phone: string

    @Column({
        default: true
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Role, (role) => role)
    @JoinColumn()
    role: Role[]

    @OneToMany(() => Profile, (profile) => profile)
    @JoinColumn()
    profile: Profile[]

    @OneToMany( () => Address, (address) => address)
    @JoinColumn()
    address: Address[]
}