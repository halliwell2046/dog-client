import { Component, OnInit } from '@angular/core';
import { DogOwnerService } from '../dog-owner-create/dog-owner.service';

@Component({
  selector: 'app-walker-create',
  templateUrl: './walker-create.component.html',
  styleUrls: ['./walker-create.component.css']
})
export class WalkerCreateComponent implements OnInit {

  constructor(private service: DogOwnerService) { }

  ngOnInit() {
  }

}
