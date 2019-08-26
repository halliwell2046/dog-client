import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSidebarComponent } from './owner-sidebar.component';

describe('OwnerSidebarComponent', () => {
  let component: OwnerSidebarComponent;
  let fixture: ComponentFixture<OwnerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
