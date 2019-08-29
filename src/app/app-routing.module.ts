import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { DogCardsComponent } from './owner-dashboard/dog-cards/dog-cards.component';

const routes: Routes = [
  { path: '', component: AddressComponent},
  { path: 'tracy', component: DogCardsComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
