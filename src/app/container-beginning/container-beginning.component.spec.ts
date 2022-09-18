import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBeginningComponent } from './container-beginning.component';

describe('ContainerBeginningComponent', () => {
  let component: ContainerBeginningComponent;
  let fixture: ComponentFixture<ContainerBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
