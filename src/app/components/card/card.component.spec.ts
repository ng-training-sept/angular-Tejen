import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let groups=[
    {
      "name": "pencils",
      "items": ["red pencil","blue pencil","yellow pencil"]
    },
    {
      "name": "rubbers",
      "items": ["big rubber","small rubber"]
    },
 ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
