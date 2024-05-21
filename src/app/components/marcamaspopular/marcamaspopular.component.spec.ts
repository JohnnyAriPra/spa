import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcamaspopularComponent } from './marcamaspopular.component';

describe('MarcamaspopularComponent', () => {
  let component: MarcamaspopularComponent;
  let fixture: ComponentFixture<MarcamaspopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcamaspopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcamaspopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
