import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaConstructorComponent } from './plantilla-constructor.component';

describe('PlantillaConstructorComponent', () => {
  let component: PlantillaConstructorComponent;
  let fixture: ComponentFixture<PlantillaConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
