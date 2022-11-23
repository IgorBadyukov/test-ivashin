import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTask: string = '';
  searchTags: string = '';

  constructor(public taskService: TasksService) { }

  ngOnInit(): void {
  }

  addTask() {
    if (!this.newTask) return;
    this.taskService.createNewTask(this.newTask)
    this.newTask = '';
  }

  searchTask() {

  }
}
