import { Component, OnInit } from '@angular/core';
import { DogOwnerService } from '../dog-owner-create/dog-owner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DogOwnerService) { }

  ngOnInit() {
  }

}
