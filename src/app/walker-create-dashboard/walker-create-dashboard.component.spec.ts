import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerDashboardComponent } from './walker-create-dashboard.component';

describe('WalkerDashboardComponent', () => {
  let component: WalkerDashboardComponent;
  let fixture: ComponentFixture<WalkerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
