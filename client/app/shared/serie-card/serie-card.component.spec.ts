import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {SerieCardComponent} from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: SerieCardComponent;
  let fixture: ComponentFixture<SerieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerieCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the DOM element', () => {
    const de = fixture.debugElement.query(By.css('div'));
    expect(de).toBeNull();
  });
});
