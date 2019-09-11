import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walker-cards',
  templateUrl: './walker-cards.component.html',
  styleUrls: ['./walker-cards.component.css']
})
export class WalkerCardsComponent implements OnInit {
reviewData = [
{
  reviewTitle: "A dog's best friend!",
  review: "Jill is friendly, communicative, and accommodating. She took great care of my pup, following all the directions I left, and was overall very easy to work with. Highly recommended and will book with her again, if available.",
  rating: "5",
  petPic: "http://localhost:4200/assets/dachsund.jpg",
  petName: "Ross",
  age: "4",
}]



  constructor() { }

  ngOnInit() {
  }
  filterCards() {
    return this.reviewData.filter((item, index) => index < 4 )
 }
 
 
 
 
}
