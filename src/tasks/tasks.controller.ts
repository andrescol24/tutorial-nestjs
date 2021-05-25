import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interface/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string): Promise<Task> {
        return this.taskService.getTask(taskId);
    }

    @Post()
    addTask(@Body() task : CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(task);
    }
}
