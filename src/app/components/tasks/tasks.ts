import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: {
    title: string;
    description: string;
    status: boolean;
  }[] = [
    {
      title: 'test1',
      description: 'description1',
      status: true,
    },
    {
      title: 'test2',
      description: 'description2',
      status: true,
    },
    {
      title: 'test3',
      description: 'description3',
      status: false,
    },
  ];

  taskFormData = {
    title: '',
    description: '',
    status: false,
  };

  addNewTask(taskform: NgForm) {
    if (taskform.valid && taskform.submitted) {
      this.tasks.push(this.taskFormData);
    }
  }
}
