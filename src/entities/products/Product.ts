import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany

} from "typeorm";
import { Order } from "../orders/Order";
import { Category } from "./Category";
import { Detail } from "./Detail";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        unique: true
    })
    code: number

    @Column({
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    description: string

    @Column({
        type: "decimal",
        nullable: false  
    })
    unit_price: number

    @Column({
        nullable: false
    })
    stock: number

    @Column({
        default: true,
        nullable: false
    })
    available: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToMany(() => Order, order => order.products)
    orders: Order[]

    @OneToMany( () => Category, category => category.products, {cascade: true})
    categories: Category[]

    @OneToMany( () => Detail, detail => detail.products, {cascade: true})
    details: Detail[]
}