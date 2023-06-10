import { Injectable } from '@nestjs/common';
import { GenericEntity } from './generic.entity';
import { GenericService } from './generic.service';
import { DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class GenericController<
  T extends GenericEntity,
  C extends DeepPartial<T>,
  U extends QueryDeepPartialEntity<T>,
> {
  constructor(private readonly service: GenericService<T, C, U>) {}

  create(dto: C) {
    return this.service.create(dto);
  }

  findAll() {
    return this.service.findAll();
  }

  findOne(id: number) {
    return this.service.findOne(id);
  }

  update(id: number, dto: U) {
    return this.service.update(id, dto);
  }

  remove(id: number) {
    this.service.remove(id);
  }
}
