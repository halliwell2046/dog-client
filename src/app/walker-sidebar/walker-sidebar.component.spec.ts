import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerSidebarComponent } from './walker-sidebar.component';

describe('WalkerSidebarComponent', () => {
  let component: WalkerSidebarComponent;
  let fixture: ComponentFixture<WalkerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
