import { 
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn

} from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

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
    warranty: string

    @Column({
        nullable: false
    })
    stock: number

    @Column()
    available: boolean
}