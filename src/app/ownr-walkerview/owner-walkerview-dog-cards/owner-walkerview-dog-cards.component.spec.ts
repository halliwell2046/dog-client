import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWalkerviewDogCardsComponent } from './owner-walkerview-dog-cards.component';

describe('OwnerWalkerviewDogCardsComponent', () => {
  let component: OwnerWalkerviewDogCardsComponent;
  let fixture: ComponentFixture<OwnerWalkerviewDogCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerWalkerviewDogCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerWalkerviewDogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
