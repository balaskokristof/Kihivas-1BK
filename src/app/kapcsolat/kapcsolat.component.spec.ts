import { ComponentFixture, TestBed } from '@angular/core/testing';

import { kapcsolatComponent } from './kapcsolat.component';

describe('Page1Component', () => {
  let component: kapcsolatComponent;
  let fixture: ComponentFixture<kapcsolatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [kapcsolatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(kapcsolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
