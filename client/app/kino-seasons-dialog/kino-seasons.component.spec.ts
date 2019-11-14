import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KinoSeasonsComponent} from './kino-seasons.component';

describe('KinoSeasonsComponent', () => {
  let component: KinoSeasonsComponent;
  let fixture: ComponentFixture<KinoSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoSeasonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
