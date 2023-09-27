import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements  OnInit  {
  groceryCards: Card[] = [];

  ngOnInit(): void {
    this.groceryCards = [
        {
            id: "1",
            name: 'Football groceryS',
            price: 1500,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
            description: 'Football description'
        },
        {
            id: "2",
            name: 'Football grocery',
            price: 6000,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
            description: 'Football description andding to ccart'
        }
    ];
}
}
