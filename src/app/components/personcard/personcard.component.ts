import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-personcard',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule],
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.scss']
})
export class PersoncardComponent {

  @Input({required: true}) titles: string[] = [];

  @Output() titleEvent$ = new EventEmitter<string>();
  @Output() deleteEvent$ = new EventEmitter<string>();

  onAddCard(title: string): void {
    console.log(title)
    this.titleEvent$.emit(title);
  }
  onDeleteCard(title:string): void {
    this.deleteEvent$.emit(title);
  }

}
