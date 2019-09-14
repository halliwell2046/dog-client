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
  rating: "4",
  petPic: "http://localhost:4200/assets/mutt.jpg",
  petName: "Ross",
  age: "4",
},

{
  reviewTitle: "We love Jill!",
  review: "Jill is AWESOME. Exactly who you hope to find to watch over your loved one.She is super pleasant, and flexible to work with. My Rachel LOVED her, her dog, and her walk! I definitely hope Jill is available to exercise Rachel when I'm out of town again.",
  rating: "5",
  petPic: "http://localhost:4200/assets/dachsund.jpg",
  petName: "Rachel",
  age: "5",
},

]



  constructor() { }

  ngOnInit() {
  }
  filterCards() {
    return this.reviewData.filter((item, index) => index < 4 )
 }
 
 
 
 
}
