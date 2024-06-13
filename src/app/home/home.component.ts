import { Component, } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  taskID:number=2;
  // {'taskID':'1','taskName':'Complete To Do App'}
  tasksData:any[]=[];
  completedTaskData:any[]=[];
  task:string="";
  addTask()
  {
    console.log("add button called");
    console.log(this.task);
    if(this.task!="")
      {
        this.tasksData.push({'taskID':this.taskID,'taskName':this.task});
        this.taskID++;
        this.task="";

      }
  }

  completeTask(taskID:string)
  {
    const obj=this.tasksData.filter(item=>item.taskID==taskID)[0];
    console.log(obj);
    this.completedTaskData.push(obj);
    this.tasksData=this.tasksData.filter(item=>item.taskID!=taskID);

    



  }

}
