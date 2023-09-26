import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatCardModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
  ngOnInit(){
    setTimeout(this.userName="default",500)
  }

   groups=[
    {
      "name": "pencils",
      "items": ["red pencil","blue pencil","yellow pencil"]
    },
    {
      "name": "rubbers",
      "items": ["big rubber","small rubber"]
    },
 ]
  btnStyle="black"
  userName:string="";  
 empty(){
  this.userName=""
 }
 

}
