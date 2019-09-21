import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWalkerComponent } from './review-walker.component';

describe('ReviewWalkerComponent', () => {
  let component: ReviewWalkerComponent;
  let fixture: ComponentFixture<ReviewWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
