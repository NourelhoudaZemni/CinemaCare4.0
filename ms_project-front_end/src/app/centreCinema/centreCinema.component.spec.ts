import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreCinemaComponent } from './centreCinema.component';

describe('CentreCinemaComponent', () => {
  let component: CentreCinemaComponent;
  let fixture: ComponentFixture<CentreCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
