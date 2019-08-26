import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTableComponent } from './dog-table.component';

describe('DogTableComponent', () => {
  let component: DogTableComponent;
  let fixture: ComponentFixture<DogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
