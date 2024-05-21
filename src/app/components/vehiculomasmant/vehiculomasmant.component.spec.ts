import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculomasmantComponent } from './vehiculomasmant.component';

describe('VehiculomasmantComponent', () => {
  let component: VehiculomasmantComponent;
  let fixture: ComponentFixture<VehiculomasmantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculomasmantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculomasmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
