import { Component, OnInit } from '@angular/core';
import { DogOwnerService } from '../dog-owner.service';
import { DoggoService } from 'src/app/doggo.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {


  constructor(
    private service: DogOwnerService,
    private addingPet: DoggoService
  ) {}

  ngOnInit() {}
  onSubmit() {
    this.addingPet
      .petAdd(this.service.profileForm.value)
      .subscribe((data: any) => {

          this.addingPet.ownerPetData()
       
      }, (err)=> console.log(err));
    // console.warn(this.service.form.value);
  }

  

}
