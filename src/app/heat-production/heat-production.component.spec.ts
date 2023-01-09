import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatProductionComponent } from './heat-production.component';

describe('HeatProductionComponent', () => {
  let component: HeatProductionComponent;
  let fixture: ComponentFixture<HeatProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
