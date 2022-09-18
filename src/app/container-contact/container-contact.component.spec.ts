import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerContactComponent } from './container-contact.component';

describe('ContainerContactComponent', () => {
  let component: ContainerContactComponent;
  let fixture: ComponentFixture<ContainerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
