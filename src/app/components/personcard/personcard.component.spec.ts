import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoncardComponent } from './personcard.component';

describe('PersoncardComponent', () => {
  let component: PersoncardComponent;
  let fixture: ComponentFixture<PersoncardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersoncardComponent]
    });
    fixture = TestBed.createComponent(PersoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
