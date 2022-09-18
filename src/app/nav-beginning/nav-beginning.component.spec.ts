import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBeginningComponent } from './nav-beginning.component';

describe('NavBeginningComponent', () => {
  let component: NavBeginningComponent;
  let fixture: ComponentFixture<NavBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
