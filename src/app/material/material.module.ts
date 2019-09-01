import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule, MatSelectModule } from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';

const material = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatGridListModule,
  MatSelectModule
];
@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
