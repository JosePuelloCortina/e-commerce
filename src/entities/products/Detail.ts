import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne
} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Detail extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    images: string[];

    @Column({
        nullable: false
    })
    color: string;

    @Column({
        nullable: false
    })
    size: number;

    @Column()
    model: string

    @Column({
        nullable: false
    })
    material: string

    @Column({
        nullable: false
    })
    country_origin: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne( () => Product, product => product.details)
    products: Product

}