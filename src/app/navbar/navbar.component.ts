import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  constructor() { }

  ngOnInit() { 
    if (sessionStorage.getItem("token")) {
      this.token=sessionStorage.getItem('token');
    }

  }

  logOut(){
    sessionStorage.clear();
    this.token=undefined

  }

}
