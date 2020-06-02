import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionPandemiaComponent } from './evolucion-pandemia.component';

describe('EvolucionPandemiaComponent', () => {
  let component: EvolucionPandemiaComponent;
  let fixture: ComponentFixture<EvolucionPandemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucionPandemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionPandemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
