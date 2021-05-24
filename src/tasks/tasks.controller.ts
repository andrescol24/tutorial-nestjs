import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {Request, Response} from 'express';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {taskId: number, description: string} {
        return {taskId: 12, description: "Walking the dod"};
    }

    @Get('/express')
    getTasksUsingExpress(@Req() Req, @Res() res): string {
        return res.send("Hello from express");
    }

    @Post()
    addTask(@Body() task : CreateTaskDto): string {
        console.log(task);
        return "Added";
    }

    @Put(":taskId")
    editTask(@Param('taskId') taskId: number, @Body() task : CreateTaskDto): string {
        let message: string = `Updating task with id ${taskId}`;
        console.log(message, task);
        return message;
    }

    @Delete(":taskId")
    deleteTask(@Param('taskId') taskId: number) : string {
        console.log(`Deleting ${taskId}`);
        return `Deleting task number: ${taskId}`;
    }
}
