import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KinoMoviesComponent} from './kino-movies.component';

describe('KinoMoviesComponent', () => {
  let component: KinoMoviesComponent;
  let fixture: ComponentFixture<KinoMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoMoviesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
