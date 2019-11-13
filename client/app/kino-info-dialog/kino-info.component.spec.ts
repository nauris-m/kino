import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KinoInfoComponent} from './kino-info.component';

describe('KinoInfoComponent', () => {
  let component: KinoInfoComponent;
  let fixture: ComponentFixture<KinoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
