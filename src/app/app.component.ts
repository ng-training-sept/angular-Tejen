import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { FormComponent } from "./components/form/form.component";
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { ActivatedRoute, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from "./components/home/home.component";
import { AuthService } from './auth/auth.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CardComponent, FormComponent, FormsModule, ReversePipe, HeaderComponent, RouterOutlet, RouterModule, HomeComponent]
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}
  //private readonly authService = inject(AuthService);
  title = 'ng';
  
}
