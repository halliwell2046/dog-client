import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWalkComponent } from './request-walk.component';

describe('RequestWalkComponent', () => {
  let component: RequestWalkComponent;
  let fixture: ComponentFixture<RequestWalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestWalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
