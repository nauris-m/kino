import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MovieCardComponent} from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
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

  it('should show the DOM element', () => {
    component.condition = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const de = fixture.debugElement.query(By.css('div'));
    const el = de.nativeElement;
    expect(de).toBeDefined();
    // expect(el.textContent).toContain('Loading...');
  });
});
