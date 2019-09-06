import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerCardsComponent } from './walker-cards.component';

describe('WalkerCardsComponent', () => {
  let component: WalkerCardsComponent;
  let fixture: ComponentFixture<WalkerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
