/* eslint-disable prefer-rest-params */
import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { QUERY } from './query';

@Injectable()
export class DatabaseService {
  private readonly database = [];
  private readonly pool: Pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'casamento',
  });
  private client: PoolClient = null;

  constructor() {
    this.init();
  }

  async init() {
    this.client = await this.pool.connect();
    this.client.query(QUERY.init);
  }

  async findAll() {
    return await this.client.query(QUERY.findAll);
  }
  async findOne(id: number) {
    return await this.client.query(QUERY.findOne, [id]);
  }
  async findComplete(id: number) {
    return await this.client.query(QUERY.findOneComplete, [id]);
  }

  async create(vals: any[]) {
    return this.client.query(QUERY.create, vals);
  }

  async delete(id: number) {
    return this.client.query(QUERY.delete, [id]);
  }

  async update(id: number) {
    return this.client.query(QUERY.delete, [id]);
  }
}
