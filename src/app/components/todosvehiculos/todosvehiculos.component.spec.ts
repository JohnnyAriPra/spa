import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosvehiculosComponent } from './todosvehiculos.component';

describe('TodosvehiculosComponent', () => {
  let component: TodosvehiculosComponent;
  let fixture: ComponentFixture<TodosvehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosvehiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
