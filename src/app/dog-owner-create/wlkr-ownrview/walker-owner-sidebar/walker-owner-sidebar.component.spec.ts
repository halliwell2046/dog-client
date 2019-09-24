import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerOwnerSidebarComponent } from './walker-owner-sidebar.component';

describe('WalkerOwnerSidebarComponent', () => {
  let component: WalkerOwnerSidebarComponent;
  let fixture: ComponentFixture<WalkerOwnerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerOwnerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerOwnerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
