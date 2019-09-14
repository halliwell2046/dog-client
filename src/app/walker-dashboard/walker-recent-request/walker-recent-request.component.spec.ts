import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerRecentRequestComponent } from './walker-recent-request.component';

describe('WalkerRecentRequestComponent', () => {
  let component: WalkerRecentRequestComponent;
  let fixture: ComponentFixture<WalkerRecentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerRecentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerRecentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
