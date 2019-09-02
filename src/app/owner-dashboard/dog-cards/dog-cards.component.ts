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
      petPic : "../../assets/boxer-1.jpg",
      id : 1,
      age : 6,
      gender : "m",
      petName : "Bogey",
      breed : "Boxer",
      bio: "Boxers are intelligent, high-energy, playful dogs that like to stay busy. They prefer to be in the company of their owners and are loyal pets that will fiercely guard their family and home against strangers."
    },
    {
      weight : 40,
      userId : 1,
      petPic : "../../assets/dachsund.jpg",
      id : 1,
      age : 2,
      gender : "f",
      petName : "Charlotte",
      breed : "Dachsund" ,
      bio: "Despite their size, dachshunds are known for their courageous nature and will take on animals much larger than themselves. As family dogs, dachshunds are loyal companions and good watchdogs."
    },
    {
      weight : 40,
      userId : 1,
      petPic : "../../assets/dachsund.jpg",
      id : 1,
      age : 2,
      gender : "f",
      petName : "Charlotte",
      breed : "Dachsund" ,
      bio: "Despite their size, dachshunds are known for their courageous nature and will take on animals much larger than themselves. As family dogs, dachshunds are loyal companions and good watchdogs."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
