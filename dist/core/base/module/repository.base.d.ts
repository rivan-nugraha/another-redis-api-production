import { ClientSession, FilterQuery, Model, SortOrder, Types, UpdateQuery } from 'mongoose';
import { BaseRepositoryPort } from '../../port/repository.base.port';
import { DbMapper } from '../domain/db-mapper';
import { IPaginationMeta } from 'src/core/interface/pagination-meta.interface';
import { IRepositoryResponse } from 'src/core/interface/repository-response.interface';
export declare abstract class BaseRepository<Entity, MongoEntity> implements BaseRepositoryPort<Entity, MongoEntity> {
    private readonly genericModel;
    protected readonly mapper: DbMapper<Entity, MongoEntity>;
    constructor(genericModel: Model<MongoEntity>, mapper: DbMapper<Entity, MongoEntity>);
    findAll(session?: ClientSession | null): Promise<MongoEntity[]>;
    findOne(identifier: FilterQuery<MongoEntity>, session?: ClientSession | null): Promise<Entity | undefined>;
    findOneOrThrow(identifier: FilterQuery<MongoEntity>, session?: ClientSession): Promise<Entity>;
    findOneOrThrow(identifier: FilterQuery<MongoEntity>, errorMessage?: string, session?: ClientSession): Promise<Entity>;
    findOneAndThrow(identifier: FilterQuery<MongoEntity>, session?: ClientSession): Promise<void>;
    findOneAndThrow(identifier: FilterQuery<MongoEntity>, errorMessage?: string, session?: ClientSession): Promise<void>;
    findOneLatest(identifier: FilterQuery<MongoEntity>, session?: ClientSession | null): Promise<Entity | undefined>;
    findById(id: Types.ObjectId, session?: ClientSession | null): Promise<Entity | undefined>;
    findBy(identifier: FilterQuery<MongoEntity>, session?: ClientSession | null): Promise<Entity[]>;
    findByPaginated(identifier: FilterQuery<MongoEntity>, paginationMeta: IPaginationMeta): Promise<Entity[]>;
    findByPaginateSorted(identifier: FilterQuery<MongoEntity>, paginationMeta: IPaginationMeta, sort: {
        [key: string]: SortOrder | {
            $meta: any;
        };
    }): Promise<Entity[]>;
    count(): Promise<number>;
    countBy(identifier: FilterQuery<MongoEntity>): Promise<number>;
    save(entity: Entity, session?: ClientSession): Promise<IRepositoryResponse>;
    saveReturnDocument(entity: Entity, session?: ClientSession): Promise<MongoEntity | null>;
    saveMany(entities: Entity[], session?: ClientSession): Promise<{
        n: number;
    }>;
    updateOne(identifier: FilterQuery<MongoEntity>, data: Entity, session?: ClientSession): Promise<IRepositoryResponse>;
    updateOneWithoutThrow(identifier: FilterQuery<MongoEntity>, data: Entity, session?: ClientSession): Promise<IRepositoryResponse>;
    updateMany(identifier: FilterQuery<MongoEntity>, data: UpdateQuery<Partial<MongoEntity>>, session?: ClientSession): Promise<IRepositoryResponse>;
    delete(identifier: FilterQuery<Partial<MongoEntity>>, session?: ClientSession): Promise<IRepositoryResponse>;
    deleteWithoutThrow(identifier: FilterQuery<Partial<MongoEntity>>, session?: ClientSession): Promise<IRepositoryResponse>;
    deleteAll(session?: ClientSession): Promise<IRepositoryResponse>;
    prepareQuery(query: FilterQuery<MongoEntity>): FilterQuery<MongoEntity>;
    private _validateMongoID;
}
