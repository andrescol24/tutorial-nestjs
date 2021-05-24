import { Injectable } from '@nestjs/common';
import { Task } from './interface/Task';

@Injectable()
export class TasksService {
    tasks: Task[] = [
        {
            id: 1,
            title: "Walking the dog",
            description: "Go out and walk the dog",
            done: false
        },
        {
            id: 2,
            title: "Learn about Well Architecte",
            description: "Doing",
            done: false
        },
        {
            id: 3,
            title: "Other",
            description: "To DO",
            done: false
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id : number): Task {
        return this.tasks.find(task => task.id == id);
    }

    deleteTask(id: number): boolean {
        let position = this.tasks.findIndex(task => task.id == id);
        if(position >= 0) {
            this.tasks.splice(position, 1);
            return true;
        }
        return false;
    }
}
