import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [
  { path: '', component: AddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatFormFieldModule],
  exports: [RouterModule,
  MatFormFieldModule]
})
export class AppRoutingModule { }
