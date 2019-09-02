import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { DogCardsComponent } from './owner-dashboard/dog-cards/dog-cards.component';
import { OwnerSidebarComponent } from './owner-dashboard/owner-sidebar/owner-sidebar.component';
import { OwnerDashboardComponent} from './owner-dashboard/owner-dashboard.component'


const routes: Routes = [
  { path: '', component: AddressComponent},
  { path: 'tracy', component: OwnerDashboardComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
