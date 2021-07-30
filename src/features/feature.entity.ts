import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('features')
export class FeatureEntity {
    @PrimaryGeneratedColumn()
    id_feature:number;
   
    @Column({length:50})
    name:string;
   
    @Column()
    number:number;

    @Column({length:50})
    type:string;
   
    @Column({length:300})
    description:string;
}