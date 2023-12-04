import { provideSingleton } from "@expressots/core";
import { ModelType } from "@typegoose/typegoose/lib/types";
import {
    ObjectId,
    ProjectionFields,
    QueryOptions,
    UpdateQuery,
} from "mongoose";

@provideSingleton(BaseRepository)
export class BaseRepository<T> {
    protected resources!: ModelType<T>;

    getResource() {
        return this.resources;
    }

    async getById(_id: ObjectId, project: string[] = []) {
        return this.resources.findById(_id).select(project);
    }

    async findOne(conditions: any = {}, project: string[] = []) {
        return await this.resources.findOne(conditions).select(project);
    }

    async getOne(conditions: any = {}, project: string[] = []) {
        return this.resources.findOne(conditions).select(project);
    }

    async getList(
        conditions: any = {},
        options: QueryOptions<T> = {},
        projections: ProjectionFields<T> = {},
    ) {
        const { sort, skip, limit } = options;
        const result = this.resources.find(conditions);

        if (sort) {
            result.sort(sort);
        }

        if (skip !== undefined && limit !== undefined) {
            return result.skip(skip).limit(limit);
        }

        return result.select(projections);
    }

    async create(data: Partial<T>) {
        return this.resources.create(data);
    }

    async createMany(data: Partial<T>[]) {
        return this.resources.insertMany(data);
    }

    async updateOne(
        conditions: any = {},
        update: UpdateQuery<T> = {},
        options: QueryOptions = {},
    ) {
        return this.resources.updateOne(conditions, update, options);
    }

    async updateMany(
        conditions: any = {},
        update: UpdateQuery<T> = {},
        options: QueryOptions = {},
    ) {
        return this.resources.updateMany(conditions, update, options);
    }

    async deleteById(_id: ObjectId): Promise<boolean> {
        const result = await this.resources.deleteOne({ _id });
        return result.acknowledged;
    }

    async deleteOne(conditions: any = {}): Promise<boolean> {
        const result = await this.resources.deleteOne(conditions);
        return result.acknowledged;
    }

    async deleteMany(conditions: any = {}) {
        const result = await this.resources.deleteMany(conditions);
        return result.acknowledged;
    }
}
