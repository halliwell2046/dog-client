import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerBioComponent } from './walker-bio.component';

describe('WalkerBioComponent', () => {
  let component: WalkerBioComponent;
  let fixture: ComponentFixture<WalkerBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
