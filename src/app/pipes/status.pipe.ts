import { Pipe, PipeTransform } from '@angular/core';
import {ITasks} from "../models/tasks";

@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {
  transform(tasks: ITasks[], status: string): ITasks[] {
    return tasks.filter((t) => t.status == status);
  }

}
