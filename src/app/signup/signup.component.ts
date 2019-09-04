import { Component, OnInit } from '@angular/core';
import { DogOwnerService } from '../dog-owner-create/dog-owner.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: DogOwnerService) { }

  ngOnInit() {
  }

}
