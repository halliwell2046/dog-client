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
  review: "Jill is AWESOME. Exactly who you hope to find to watch over your loved one.She is super pleasant, and flexible to work with. My Rachel LOVED her, her dog, and her walk! I hope Jill is available next time I need her.",
  rating: "5",
  petPic: "http://localhost:4200/assets/dachsund.jpg",
  petName: "Rachel",
  age: "5",
},

{
  reviewTitle: "Jill rocks!",
  review: "She really went the extra mile for us. We couldn't get home from work in time to let Joey out, so we texted Jill and she immediately helped us out. No messes when we got home. We will request her again.",
  rating: "4",
  petPic: "http://localhost:4200/assets/dog-icon.png",
  petName: "Joey",
  age: "3",
},

]



  constructor() { }

  ngOnInit() {
  }
  filterCards() {
    return this.reviewData.filter((item, index) => index < 4 )
 }
 
 
 
 
}
