import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableWalkersComponent } from './available-walkers.component';

describe('AvailableWalkersComponent', () => {
  let component: AvailableWalkersComponent;
  let fixture: ComponentFixture<AvailableWalkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableWalkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableWalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
