import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  enabled: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  modifiedAt: Date;
}
