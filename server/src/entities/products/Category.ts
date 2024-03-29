import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany
} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column({
        nullable: false
    })
    applications: string 

    @Column()
    public: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}