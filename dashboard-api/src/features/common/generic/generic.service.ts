import { Injectable, NotFoundException } from '@nestjs/common';
import { GenericEntity } from './generic.entity';
import { DeepPartial, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class GenericService<
  T extends GenericEntity,
  C extends DeepPartial<T>,
  U extends QueryDeepPartialEntity<T>,
> {
  constructor(private readonly repository: Repository<T>) {}

  abstract getFindByIdOptions(id: number): FindOneOptions<T>;

  create(dto: C) {
    return this.repository.create(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return (
      this.repository.findOne(this.getFindByIdOptions(id)) ??
      this.handleNotFoundException()
    );
  }

  update(id: number, dto: U) {
    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    return this.toggleDisabled(id);
  }

  private toggleDisabled(id: number): Promise<UpdateResult> {
    return this.repository
      .createQueryBuilder()
      .update(this.repository.metadata.tableName)
      .set({ enabled: false })
      .where('id = :id', { id })
      .execute();
  }

  handleNotFoundException() {
    throw new NotFoundException(`Resource not found`);
  }
}
