import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-walker-bio",
  templateUrl: "./walker-bio.component.html",
  styleUrls: ["./walker-bio.component.css"]
})
export class WalkerBioComponent implements OnInit {
  constructor() {}
  @Input() bioform: FormGroup;
  ngOnInit() {}
}
