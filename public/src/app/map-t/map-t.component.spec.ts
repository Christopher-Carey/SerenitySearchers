import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTComponent } from './map-t.component';

describe('MapTComponent', () => {
  let component: MapTComponent;
  let fixture: ComponentFixture<MapTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
