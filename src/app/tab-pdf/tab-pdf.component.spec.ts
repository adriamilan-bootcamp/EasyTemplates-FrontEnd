import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPdfComponent } from './tab-pdf.component';

describe('TabPdfComponent', () => {
  let component: TabPdfComponent;
  let fixture: ComponentFixture<TabPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
