import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmComponent } from './addFilm.component';

describe('AddComponent', () => {
  let component: AddFilmComponent;
  let fixture: ComponentFixture<AddFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
