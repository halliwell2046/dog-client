import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerCreateComponent } from './walker-create.component';

describe('WalkerCreateComponent', () => {
  let component: WalkerCreateComponent;
  let fixture: ComponentFixture<WalkerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
