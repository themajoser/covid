import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesConMasMuertesComponent } from './paises-con-mas-muertes.component';

describe('PaisesConMasMuertesComponent', () => {
  let component: PaisesConMasMuertesComponent;
  let fixture: ComponentFixture<PaisesConMasMuertesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesConMasMuertesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesConMasMuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
