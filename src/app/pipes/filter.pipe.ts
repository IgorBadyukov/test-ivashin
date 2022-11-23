import { Pipe, PipeTransform } from '@angular/core';
import {ITasks} from "../models/tasks";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: ITasks[], tag: string): ITasks[] {
    if (tag.length === 0) {
      return tasks;
    }
    return tasks.filter((task: ITasks) => task.tags.find(t => t.toLowerCase().includes(tag.toLowerCase())));
  }

}
