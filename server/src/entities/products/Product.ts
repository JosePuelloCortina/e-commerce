import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
    ManyToOne

} from "typeorm";
import { Order } from "../orders/Order";
import { Category } from "./Category";
import { ProductDetail } from "./ProductDetail";
import { User } from "../users/User";

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

    @ManyToOne(() => User, (user) => user.products)
    user: User

    @ManyToOne(() => Category, (category) => category.products) 
    category: Category
    
    @ManyToMany(() => Order, order => order.products)
    orders: Order[]

    @OneToMany( () => ProductDetail, productDetail => productDetail.products, {cascade: true})
    productDetails: ProductDetail[]
}