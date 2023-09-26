import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';
import { PersoncardComponent } from '../personcard/personcard.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,ReversePipe,PersoncardComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  likeCount:number=0;
  titles: string[] = ['a', 'b', 'c', 'di', 'e'];
  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  title:string="hello title"
  name: String="Tejen";
  contact :Number= 9861609685;
  profile={
    name:{
      fname:"Tejen",
      lname:"Pradhan"
    },
    age:22
  };


  port:number = 4200;
isButtonDisabled= true;
addCard(titlea: string) {
  console.log(titlea)
  this.cardsTitle.push(titlea);
  console.log(this.cardsTitle)
}
deleteCard(title:string) {
  console.log(title+ "sadad")
  const a=this.cardsTitle.indexOf(title)
  console.log(a)
  this.cardsTitle.splice(a,1)
  console.log(this.cardsTitle)
}
toggleDisable()
{
  this.isButtonDisabled=!this.isButtonDisabled;
}
onLike(): void {
  this.likeCount++;
  alert('You liked this!')
}


}
