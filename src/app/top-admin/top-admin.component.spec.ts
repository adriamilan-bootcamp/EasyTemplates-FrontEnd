import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdminComponent } from './top-admin.component';

describe('TopAdminComponent', () => {
  let component: TopAdminComponent;
  let fixture: ComponentFixture<TopAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
