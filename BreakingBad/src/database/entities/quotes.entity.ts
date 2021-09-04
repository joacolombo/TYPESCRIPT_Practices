import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quotes{
    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column()
    quote: string;

    @Column()
    author: string;

    @Column()
    series: string;
}
