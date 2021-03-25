import { Planning } from 'src/planning/planning.entity';
import {
  Column,
  Entity,
  ManyToOne,
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

  @Column({ default: 0 })
  CodeAdmin: number;

  @OneToMany(() => Planning, (planning) => planning.owner)
  plannings: Planning[];

  @OneToMany(() => User, (user) => user.id)
  patients: User[];

  @ManyToOne(() => User, (user) => user.patients)
  owner: User;

  @Column('boolean')
  isAdmin: boolean;
}
