import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionGeograficaComponent } from './distribucion-geografica.component';

describe('DistribucionGeograficaComponent', () => {
  let component: DistribucionGeograficaComponent;
  let fixture: ComponentFixture<DistribucionGeograficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionGeograficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionGeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
