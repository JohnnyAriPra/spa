import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoporanioComponent } from './vehiculoporanio.component';

describe('VehiculoporanioComponent', () => {
  let component: VehiculoporanioComponent;
  let fixture: ComponentFixture<VehiculoporanioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculoporanioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoporanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
