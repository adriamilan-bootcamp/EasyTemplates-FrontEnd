import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBeginningComponent } from './top-beginning.component';

describe('TopBeginningComponent', () => {
  let component: TopBeginningComponent;
  let fixture: ComponentFixture<TopBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
