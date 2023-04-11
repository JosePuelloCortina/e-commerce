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

    @ManyToOne(() => User, (user) => user.profiles)
    user: User;
}