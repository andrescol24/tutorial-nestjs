import { Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {taskId: number, description: string} {
        return {taskId: 12, description: "Walking the dod"};
    }

    @Post()
    addTask(@Body() task : CreateTaskDto): string {
        console.log(task);
        return "Added";
    }

    @Put()
    editTask(): string {
        return "Edited";
    }

    @Delete()
    deleteTask() : String {
        return "deleted";
    }
}
