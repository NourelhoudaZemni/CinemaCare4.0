import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetFilmsComponent } from './getfilms.component';

describe('GetParentComponent', () => {
  let component: GetFilmsComponent;
  let fixture: ComponentFixture<GetFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
