import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { FormComponent } from "./components/form/form.component";
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { ActivatedRoute, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CardComponent, FormComponent,FormsModule,ReversePipe,HeaderComponent,RouterOutlet,RouterModule],
   
})
export class AppComponent {
  title = 'ng';
  
}
