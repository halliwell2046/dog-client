import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-cards',
  templateUrl: './dog-cards.component.html',
  styleUrls: ['./dog-cards.component.css']
})
export class DogCardsComponent implements OnInit {

  petData = [
    {
      weight : 40,
      userId : 1,
      petPic : "../../assets/spaniel.jpg",
      id : 1,
      age : 2,
      gender : "m",
      petName : "Bogey",
      breed : "Cocker Spaniel",
      bio: "Lorem ipsum sognwiefm fjwei sertgf fugjasdigfvn asdkufb fudn asd aisdf v sjdfbas dfjsdhfabskdbf  fbhbwsi skrujoi kaga;sdof."
    },
    {
      weight : 40,
      userId : 1,
      petPic : "../../assets/dachsund.jpg",
      id : 1,
      age : 2,
      gender : "m",
      petName : "Charlotte",
      breed : "Cocker Spaniel" ,
      bio: "Lorem ipsum sognwiefm fjwei sertgf fugjasdigfvn asdkufb fudn asd aisdf v sjdfbas dfjsdhfabskdbf  fbhbwsi skrujoi kaga;sdof."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
