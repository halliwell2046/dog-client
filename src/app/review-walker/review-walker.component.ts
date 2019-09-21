import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DoggoService } from "../doggo.service";

/**
 * Review Walker Stepper vertical
 */
@Component({
  selector: "app-review-walker",
  templateUrl: "./review-walker.component.html",
  styleUrls: ["./review-walker.component.css"]
})
export class ReviewWalkerComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public doggoService: DoggoService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      reviewTitle: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      rating: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      review: ["", Validators.required]
    });
    // this.fourthFormGroup = this._formBuilder.group({
    //   id: [this.reviewID, Validators.required]
    // });
  }
  @Input() reviewID: string;
  continueReviewing: boolean = false;
  @Output() reviewEvent = new EventEmitter<boolean>();
  onSubmit() {
    let submittingData = {};
    Object.assign(
      submittingData,
      this.firstFormGroup.value,
      this.secondFormGroup.value,
      this.thirdFormGroup.value,
      { id: this.reviewID }
    );
    console.log(submittingData);
    this.doggoService.addReview(submittingData).subscribe(
      data => {
        console.log(data);
        this.reviewEvent.emit(this.continueReviewing);
      },
      err => console.log(err.message)
    );
  }
}
