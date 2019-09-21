import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnrWalkerviewComponent } from './ownr-walkerview.component';

describe('OwnrWalkerviewComponent', () => {
  let component: OwnrWalkerviewComponent;
  let fixture: ComponentFixture<OwnrWalkerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnrWalkerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnrWalkerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
