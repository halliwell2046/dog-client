import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisuTabsComponent } from './lisu-tabs.component';

describe('LisuTabsComponent', () => {
  let component: LisuTabsComponent;
  let fixture: ComponentFixture<LisuTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisuTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
