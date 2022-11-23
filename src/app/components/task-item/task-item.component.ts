import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ITasks} from "../../models/tasks";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: ITasks
  @Input() index: number
  changeTask = ''
  @ViewChild('listItem') listItem: ElementRef;
  @ViewChild('editBtn') editBtn: ElementRef;

  constructor(public taskService: TasksService) { }

  completeTask() {
    this.task.status = this.task.status === 'complete' ? 'incomplete' : 'complete';
  }

  editTask() {
    let containsClass = this.listItem.nativeElement.classList.contains("list__item__edit-mode");
    if (containsClass) {
      this.editBtn.nativeElement.innerText = "Edit";
      this.task.taskName =  this.changeTask;
      this.task.tags = this.taskService.showTags(this.changeTask);
    } else {
      this.changeTask = this.task.taskName;
      this.editBtn.nativeElement.innerText = "Save";
    }

    this.listItem.nativeElement.classList.toggle('list__item__edit-mode');
  }
}
