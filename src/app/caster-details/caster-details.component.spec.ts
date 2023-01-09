import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterDetailsComponent } from './caster-details.component';

describe('CasterDetailsComponent', () => {
  let component: CasterDetailsComponent;
  let fixture: ComponentFixture<CasterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
