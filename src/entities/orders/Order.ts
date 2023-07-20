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
} from "typeorm";
import { User } from "../users/User";
import { Product } from "../products/Product";
import { Payment } from "../payments/Payment";



@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        unique: true
    })
    order_number: string

    generateOrderNumber() {
        let randomNumber = Math.floor(Math.random() * 10000000000);
        this.order_number = randomNumber.toString().padStart(10, '0');
      }

    @Column({
        nullable: false
    })
    quantity: number

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

    @ManyToMany(() => Product, product => product.orders, {cascade: true})
    @JoinTable()
    products: Product[]

    @ManyToOne(() => Payment, payment => payment.order)
    payment: Payment
}