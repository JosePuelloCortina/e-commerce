import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn

} from "typeorm";
import { Order } from "../orders/Order";

@Entity()
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    payment_method: string

    @Column()
    discount: number    

    @Column()
    amount: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(() => Order)
    @JoinColumn()
    order: Order
}