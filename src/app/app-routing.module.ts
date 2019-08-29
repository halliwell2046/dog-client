import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { DogProfileComponent } from './dog-owner-create/dog-profile/dog-profile.component';
import { DogTableComponent } from './dog-owner-create/dog-table/dog-table.component';


const routes: Routes = [
  { path: '', component: AddressComponent},
  { path: 'alice', component: DogProfileComponent},
  { path: 'alice2', component: DogTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
