import { Component, OnInit } from '@angular/core';
import { Task } from '../../TASK';
import { TaskService } from '../../services/task.service'

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.get_tasks().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task): void {
    this.taskService.delete_task(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.update_task(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.insert_task(task).subscribe((task) => this.tasks.push(task))
  }
}
