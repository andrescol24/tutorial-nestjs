import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interface/Task';

@Injectable()
export class TasksService {

    constructor(@InjectModel("Task") private taskModel: Model<Task>) {}

    async getTasks() {
        return await this.taskModel.find();
    }

    async getTask(id : string) {
        return await this.taskModel.findById(id);
    }

    async createTask(task: CreateTaskDto) : Promise<Task> {
        let taskModel = new this.taskModel(task);
        return await taskModel.save();
    }
}
