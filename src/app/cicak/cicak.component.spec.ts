import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cicakComponent } from './cicak.component';

describe('Page2Component', () => {
  let component: cicakComponent;
  let fixture: ComponentFixture<cicakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [cicakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(cicakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
