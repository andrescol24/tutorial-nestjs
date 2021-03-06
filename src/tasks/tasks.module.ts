import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schema/task.schema';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    // Theses lines is to registry all Schemans or Collections (MongoDB)
    imports: [MongooseModule.forFeature([ 
        {name: "Task", schema: TaskSchema}
    ])],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
