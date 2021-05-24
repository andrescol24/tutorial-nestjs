import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interface/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: number): Task {
        return this.taskService.getTask(taskId);
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
    deleteTask(@Param('taskId') taskId: number, @Res() res) {
        let deleted = this.taskService.deleteTask(taskId);
        if(deleted) {
            res.status(200);
            res.send(`deleted task with id: ${taskId}`);
        } else {
            res.status(404);
            res.send(`not found task with id: ${taskId}`);
        }
    }
}
