import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWalkerviewSidebarComponent } from './owner-walkerview-sidebar.component';

describe('OwnerWalkerviewSidebarComponent', () => {
  let component: OwnerWalkerviewSidebarComponent;
  let fixture: ComponentFixture<OwnerWalkerviewSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerWalkerviewSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerWalkerviewSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
