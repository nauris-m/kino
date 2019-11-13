import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KinoSavedComponent} from './kino-saved.component';

describe('KinoSavedComponent', () => {
  let component: KinoSavedComponent;
  let fixture: ComponentFixture<KinoSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoSavedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
