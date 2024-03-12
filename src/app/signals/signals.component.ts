import {Component, computed, signal} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  userName = signal('kamal');

  constructor() {
    console.log(this.userName);

    this.userName.set('Dasun');
    console.log(this.userName);
  }

  tasks= signal([
    {id: 1, title: 'Task 1' , priority:'high'},
    {id: 2, title: 'Task 2' , priority:'medium'},
    {id: 3, title: 'Task 3' , priority:'low'},
    {id: 4, title: 'Task 4' , priority:'high'},
    {id: 5, title: 'Task 5' , priority:'medium'},
    {id: 6, title: 'Task 6' , priority:'low'},
    {id: 7, title: 'Task 7' , priority:'high'},

  ])

  urgentTasks= computed(()=>
  this.tasks().filter((task)=>task.priority==='high'))

  addTask(){
    this.tasks.update(tasks=>[...tasks,{id: tasks.length+1, title: `Task ${tasks.length+1}`, priority:'high'}])
  }
}
