import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DoggoService } from '../doggo.service';

/**
 * Review Walker Stepper vertical
 */
@Component({
  selector: 'app-review-walker',
  templateUrl: './review-walker.component.html',
  styleUrls: ['./review-walker.component.css']
})
export class ReviewWalkerComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private doggoService: DoggoService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    let submittingData = {
      reviewTitle: this.firstFormGroup,
      rating: this.secondFormGroup,
      review: this.thirdFormGroup
    }

    this.doggoService.addReview(submittingData).subscribe((data) => {
      console.log(data);
    }, (err)=> console.log (err));
  }
}