import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabImagesComponent } from './tab-images.component';

describe('TabImagesComponent', () => {
  let component: TabImagesComponent;
  let fixture: ComponentFixture<TabImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
