import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    OneToOne

} from "typeorm";
import { User } from "../users/User";
import { Product } from "../products/Product";
import { Payment } from "../payments/Payment";

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    order_number: number

    @Column({
        nullable: false
    })
    quantity: number

    @Column({
        nullable: false
    })
    shipping_info: string

    @Column()
    total_amount: number

    @Column()
    commission_amount: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.orders)
    user: User

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

    @ManyToOne(() => Payment, payment => payment.order)
    payment: Payment
}