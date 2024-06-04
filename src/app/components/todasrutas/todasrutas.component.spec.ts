import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasrutasComponent } from './todasrutas.component';

describe('TodasrutasComponent', () => {
  let component: TodasrutasComponent;
  let fixture: ComponentFixture<TodasrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodasrutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodasrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
