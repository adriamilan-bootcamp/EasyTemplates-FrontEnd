import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfConstructorComponent } from './pdf-constructor.component';

describe('PdfConstructorComponent', () => {
  let component: PdfConstructorComponent;
  let fixture: ComponentFixture<PdfConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
