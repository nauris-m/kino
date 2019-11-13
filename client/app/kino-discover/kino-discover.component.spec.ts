import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KinoDiscoverComponent} from './kino-discover.component';

describe('KinoDiscoverComponent', () => {
  let component: KinoDiscoverComponent;
  let fixture: ComponentFixture<KinoDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KinoDiscoverComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
