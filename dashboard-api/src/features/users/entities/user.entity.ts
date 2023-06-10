import { GenericEntity } from 'src/features/common/generic/generic.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends GenericEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;
}
