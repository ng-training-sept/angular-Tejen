import { Routes } from "@angular/router";
import { SportsComponent } from "./sports.component";
import { CardItemComponent } from "src/app/components/card/card-item/card-item.component";

export const routes: Routes = [
    { path: '', component: SportsComponent },
    { path: 'card-item/:id', component: CardItemComponent }
  ];