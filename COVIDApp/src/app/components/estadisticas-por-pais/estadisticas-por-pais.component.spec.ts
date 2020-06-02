import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasPorPaisComponent } from './estadisticas-por-pais.component';

describe('EstadisticasPorPaisComponent', () => {
  let component: EstadisticasPorPaisComponent;
  let fixture: ComponentFixture<EstadisticasPorPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasPorPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasPorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
