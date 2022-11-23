import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(task: string): string {
    let nameStr = '';
    let spanFlag = false;
    for (let i = 0; i < task.length; i++) {
      if (task[i] === '#' && !spanFlag) {
        nameStr += `<span class="span__tag">#`
        spanFlag = true;
      }
      else if (task[i] === ' ' && spanFlag) {
        nameStr += '</span>' + ' ';
        spanFlag = false;
      }
      else if (i + 1 === task.length && spanFlag) {
        nameStr += task[i] + '</span>'
        spanFlag = false;
      }
      else {
        nameStr += task[i]
      }
    }
    return nameStr;
  }
}
