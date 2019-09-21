import { Component, OnInit } from "@angular/core";
import { DoggoService } from "src/app/doggo.service";

@Component({
  selector: "app-dog-cards",
  templateUrl: "./dog-cards.component.html",
  styleUrls: ["./dog-cards.component.css"]
})
export class DogCardsComponent implements OnInit {
  petData = [
    {
      weight: 40,
      userId: 1,
      petPic: "../../assets/boxer-1.jpg",
      id: 1,
      age: 6,
      gender: "m",
      petName: "Bogey",
      breed: "Boxer",
      bio:
        "Boxers are intelligent, high-energy, playful dogs that like to stay busy. They prefer to be in the company of their owners and are loyal pets that will fiercely guard their family and home against strangers."
    },
    {
      weight: 40,
      userId: 1,
      petPic: "../../assets/dachsund.jpg",
      id: 2,
      age: 2,
      gender: "f",
      petName: "Charlotte",
      breed: "Dachsund",
      bio:
        "Despite their size, dachshunds are known for their courageous nature and will take on animals much larger than themselves. As family dogs, dachshunds are loyal companions and good watchdogs."
    },
    {
      weight: 50,
      userId: 1,
      petPic: "../../assets/basset.jpg",
      id: 3,
      age: 4,
      gender: "m",
      petName: "Chandler",
      breed: "Hound",
      bio:
        "The basset hound is a friendly, easygoing dog. They tend to be good with other dogs and other pets in general. Bassets are people-oriented. They are not easy to train as they are quite stubborn."
    }
  ];
  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.doggoService.ownerPetData();
    this.doggoService.petData.subscribe(pet => (this.petData = pet));
  }

  deleteDog(id) {
    // this.doggoService.petDataSource=[]
    this.doggoService.deletePetData(id);
  }
}
