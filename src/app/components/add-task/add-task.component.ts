import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../TASK';
// import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  toggleAddTask!: boolean;
  // subscription!: Subscription

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  constructor(private uiService: UiService) {
    // this.subscription = 
      this.uiService.onToggle().subscribe(value => this.toggleAddTask = value);
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(!this.text) alert("Enter the task");
    else {
      const new_task: Task = {
	text: this.text,
	day: this.day,
	reminder: this.reminder
      }
      this.onAddTask.emit(new_task);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }

}
