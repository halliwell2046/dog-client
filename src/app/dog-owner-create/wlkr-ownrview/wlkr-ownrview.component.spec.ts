import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlkrOwnrviewComponent } from './wlkr-ownrview.component';

describe('WlkrOwnrviewComponent', () => {
  let component: WlkrOwnrviewComponent;
  let fixture: ComponentFixture<WlkrOwnrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlkrOwnrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlkrOwnrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
