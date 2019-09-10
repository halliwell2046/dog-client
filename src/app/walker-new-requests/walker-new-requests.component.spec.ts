import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerNewRequestsComponent } from './walker-new-requests.component';

describe('WalkerNewRequestsComponent', () => {
  let component: WalkerNewRequestsComponent;
  let fixture: ComponentFixture<WalkerNewRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerNewRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerNewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
