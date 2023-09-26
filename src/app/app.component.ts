import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { FormComponent } from "./components/form/form.component";
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CardComponent, FormComponent,FormsModule,ReversePipe,HeaderComponent]
})
export class AppComponent {
  title = 'ng';
}
