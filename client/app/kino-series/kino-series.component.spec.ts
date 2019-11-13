import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KinoSeriesComponent} from './kino-series.component';

describe('KinoSeriesComponent', () => {
  let component: KinoSeriesComponent;
  let fixture: ComponentFixture<KinoSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoSeriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
