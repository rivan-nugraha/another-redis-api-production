"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const type_validator_1 = require("../../logic/type-validator");
let BaseRepository = class BaseRepository {
    constructor(genericModel, mapper) {
        this.genericModel = genericModel;
        this.mapper = mapper;
    }
    async findAll(session = null) {
        const result = await this.genericModel.find().session(session);
        return result;
    }
    async findOne(identifier, session = null) {
        const result = await this.genericModel.findOne(identifier).session(session);
        if (!result)
            return;
        return this.mapper.toDomain(result?.toObject());
    }
    async findOneOrThrow(identifier, paramTwo = null, paramThree = null) {
        const foundData = await this.genericModel
            .findOne(identifier)
            .session(typeof paramTwo !== 'string' ? paramTwo : paramThree);
        if (!foundData) {
            throw new common_1.NotFoundException(typeof paramTwo === 'string'
                ? paramTwo
                : `E 404: DATA ${this.constructor.name
                    .replace('Repository', '')
                    .toUpperCase()} NOT FOUND`);
        }
        return this.mapper.toDomain(foundData);
    }
    async findOneAndThrow(identifier, paramTwo = null, paramThree = null) {
        const foundData = await this.genericModel
            .findOne(identifier)
            .session(typeof paramTwo !== 'string' ? paramTwo : paramThree);
        if (foundData) {
            throw new common_1.ConflictException(typeof paramTwo === 'string' ? paramTwo : `E 409: DATA ALREADY EXISTS`);
        }
    }
    async findOneLatest(identifier, session = null) {
        const result = await this.genericModel
            .findOne(identifier)
            .sort({ _id: -1 })
            .session(session);
        if (!result)
            return;
        return this.mapper.toDomain(result);
    }
    async findById(id, session = null) {
        this._validateMongoID(id);
        const result = await this.genericModel.findById(id).session(session);
        if (!result)
            return;
        return this.mapper.toDomain(result);
    }
    async findBy(identifier, session = null) {
        const result = await this.genericModel
            .aggregate([{ $match: identifier }])
            .session(session);
        return result.map((it) => this.mapper.toDomain(it));
    }
    async findByPaginated(identifier, paginationMeta) {
        const { limit = 100, skip = 0 } = paginationMeta;
        const result = await this.genericModel
            .find(identifier)
            .skip(skip)
            .limit(limit);
        return result.map((it) => this.mapper.toDomain(it));
    }
    async findByPaginateSorted(identifier, paginationMeta, sort) {
        const { limit = 100, skip = 0 } = paginationMeta;
        const result = await this.genericModel
            .find(identifier)
            .skip(skip)
            .sort(sort)
            .limit(limit);
        return result.map((it) => this.mapper.toDomain(it));
    }
    async count() {
        return await this.genericModel.find().countDocuments();
    }
    async countBy(identifier) {
        return await this.genericModel.find(identifier).countDocuments();
    }
    async save(entity, session) {
        const mongoEntity = new this.genericModel(this.mapper.toPlainObject(entity));
        const newModel = new this.genericModel(mongoEntity);
        const result = await newModel.save({ session });
        return {
            _id: result._id,
        };
    }
    async saveReturnDocument(entity, session) {
        const mongoEntity = new this.genericModel(this.mapper.toPlainObject(entity));
        const newModel = new this.genericModel(mongoEntity);
        const result = await newModel.save({ session });
        return result?.toObject();
    }
    async saveMany(entities, session) {
        const mongoEntities = entities.map((entity) => new this.genericModel(this.mapper.toPlainObject(entity)));
        const mongoEntitiesEncrypted = mongoEntities;
        const saveResult = await this.genericModel.insertMany(mongoEntitiesEncrypted, { session });
        return {
            n: saveResult.length,
        };
    }
    async updateOne(identifier, data, session) {
        if (identifier._id)
            this._validateMongoID(identifier._id);
        const { matchedCount, modifiedCount } = await this.genericModel.updateOne(identifier, this.mapper.toPlainObject(data), {
            session,
        });
        if (!matchedCount) {
            throw new common_1.NotFoundException(`E 404: ${this.constructor.name
                .replace('Repository', '')
                .toUpperCase()} NOT FOUND, UPDATE FAILED`);
        }
        return { n: matchedCount, nModified: modifiedCount };
    }
    async updateOneWithoutThrow(identifier, data, session) {
        if (identifier._id)
            this._validateMongoID(identifier._id);
        const { matchedCount: n } = await this.genericModel.updateOne(identifier, this.mapper.toPlainObject(data), {
            session,
        });
        return { n };
    }
    async updateMany(identifier, data, session) {
        if (identifier._id)
            this._validateMongoID(identifier._id);
        const { matchedCount: n } = await this.genericModel.updateMany(identifier, data, {
            session,
        });
        return { n };
    }
    async delete(identifier, session) {
        if (identifier._id)
            this._validateMongoID(identifier._id);
        const { deletedCount } = await this.genericModel.deleteMany(identifier, {
            session,
        });
        if (!deletedCount)
            throw new common_1.NotFoundException(`E 404: ${this.constructor.name
                .replace('Repository', '')
                .toUpperCase()} NOT FOUND, DELETE FAILED`);
        return { n: deletedCount };
    }
    async deleteWithoutThrow(identifier, session) {
        if (identifier._id)
            this._validateMongoID(identifier._id);
        const { deletedCount: n } = await this.genericModel.deleteMany(identifier, {
            session,
        });
        return { n };
    }
    async deleteAll(session) {
        if (process.env.MODE === 'PRODUCTION') {
            throw new common_1.ForbiddenException('DeleteBulk Feature Disabled in PRODUCTION mode.');
        }
        const { deletedCount: n } = await this.genericModel.deleteMany({}, { session });
        return { n };
    }
    prepareQuery(query) {
        const ref = { ...query };
        Object.keys(ref).forEach((key) => {
            const value = ref[key];
            if (type_validator_1.TypeValidator.isObject(value) &&
                !type_validator_1.TypeValidator.isDate(value) &&
                !type_validator_1.TypeValidator.isArray(value)) {
                Object.keys(value).map((key2) => {
                    value[`$${key2}`] = value[key2];
                    delete value[key2];
                });
                return;
            }
        });
        return ref;
    }
    _validateMongoID(_id) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new common_1.BadRequestException('E 400: ID NOT VALID');
    }
};
exports.BaseRepository = BaseRepository;
exports.BaseRepository = BaseRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongoose_1.Model, Object])
], BaseRepository);
//# sourceMappingURL=repository.base.js.map