import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('text')
  description!: string;

  @ManyToOne(() => Author, (author) => author.books)
  author!: Author;
}
