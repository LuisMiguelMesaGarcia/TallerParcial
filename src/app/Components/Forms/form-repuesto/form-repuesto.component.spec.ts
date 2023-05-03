import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepuestoComponent } from './form-repuesto.component';

describe('FormRepuestoComponent', () => {
  let component: FormRepuestoComponent;
  let fixture: ComponentFixture<FormRepuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRepuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
