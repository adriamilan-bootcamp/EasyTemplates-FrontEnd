import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBeginningComponent } from './dashboard-beginning.component';

describe('DashboardBeginningComponent', () => {
  let component: DashboardBeginningComponent;
  let fixture: ComponentFixture<DashboardBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
