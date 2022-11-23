import {Injectable} from '@angular/core';
import {ITasks} from "../models/tasks";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: ITasks[] = [];

  constructor() {
  }

  createNewTask (taskString: string) {
    this.tasks.push({
      taskName: taskString,
      status: 'incomplete',
      tags: this.showTags(taskString)
    } as ITasks);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  showTags(taskName: string): string[] {
    let tagsArray: string[] = [];
    let isTag = false;
    let startPos = 0;

    for (let i = 0; i < taskName.length; i++) {
      if (taskName[i] === '#' && !isTag) {
        startPos = i + 1;
        isTag = true;
      }
      else if (taskName[i] === ' ' && isTag) {
        tagsArray.push(taskName.slice(startPos, i));
        isTag = false;
      }
      else if ( i + 1 === taskName.length && isTag) {
        tagsArray.push(taskName.slice(startPos, i + 1));
        isTag = false;
      }
    }
    return [...new Set(tagsArray)];
  }
}
