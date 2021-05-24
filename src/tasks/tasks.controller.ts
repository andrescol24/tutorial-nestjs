import { Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return "Returning tasks";
    }

    @Post()
    addTask(@Body() task): string {
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
