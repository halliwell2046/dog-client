import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material";

const material = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  BrowserAnimationsModule
];
@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
