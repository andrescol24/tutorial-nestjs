import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
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

    @Delete(":taskId")
    deleteTask(@Param('taskId') taskId: number) : string {
        console.log(`Deleting ${taskId}`);
        return `Deleting task number: ${taskId}`;
    }
}
