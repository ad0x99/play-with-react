import { Report, provideSingleton } from "@expressots/core";
import { ModelType } from "@typegoose/typegoose/lib/types";
import {
    FilterQuery,
    ObjectId,
    ProjectionFields,
    QueryOptions,
    UpdateQuery,
} from "mongoose";

@provideSingleton(BaseRepository)
export class BaseRepository<T> {
    protected resources!: ModelType<T>;
    private report!: Report;

    getResource() {
        return this.resources;
    }

    async getById(_id: ObjectId, project: string[] = []) {
        return this.resources.findById(_id).select(project);
    }

    async findOne(filter: FilterQuery<T>, project: string[] = []) {
        const resource = await this.resources.findOne(filter).select(project);

        if (!resource) {
            this.report.error(
                "Resource not found",
                404,
                this.getResource().toString(),
            );
        }

        return resource;
    }

    async getOne(filter: FilterQuery<T> = {}, project: string[] = []) {
        return this.resources.findOne(filter).select(project);
    }

    async getList(
        filter: FilterQuery<T> = {},
        options: QueryOptions<T> = {},
        projections: ProjectionFields<T> = {},
    ) {
        const { sort, skip, limit } = options;
        const result = this.resources.find(filter);

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
        filter: FilterQuery<T> = {},
        update: UpdateQuery<T> = {},
        options: QueryOptions = {},
    ) {
        return this.resources.updateOne(filter, update, options);
    }

    async updateMany(
        filter: FilterQuery<T> = {},
        update: UpdateQuery<T> = {},
        options: QueryOptions = {},
    ) {
        return this.resources.updateMany(filter, update, options);
    }

    async deleteById(_id: ObjectId): Promise<boolean> {
        const result = await this.resources.deleteOne({ _id });
        return result.acknowledged;
    }

    async deleteOne(filter: any): Promise<boolean> {
        const result = await this.resources.deleteOne(filter);
        return result.acknowledged;
    }

    async deleteMany(filter: any) {
        const result = await this.resources.deleteMany(filter);
        return result.acknowledged;
    }
}
