import { Planning } from 'src/planning/planning.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('boolean')
  isAdmin: boolean;

  @OneToMany(() => Planning, (planning) => planning.owner)
  plannings: Planning[];
}
