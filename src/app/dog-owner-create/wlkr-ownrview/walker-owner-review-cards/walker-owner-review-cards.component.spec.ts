import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerOwnerReviewCardsComponent } from './walker-owner-review-cards.component';

describe('WalkerOwnerReviewCardsComponent', () => {
  let component: WalkerOwnerReviewCardsComponent;
  let fixture: ComponentFixture<WalkerOwnerReviewCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerOwnerReviewCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerOwnerReviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
