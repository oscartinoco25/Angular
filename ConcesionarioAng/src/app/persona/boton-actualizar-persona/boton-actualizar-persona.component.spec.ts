import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonActualizarPersonaComponent } from './boton-actualizar-persona.component';

describe('BotonActualizarPersonaComponent', () => {
  let component: BotonActualizarPersonaComponent;
  let fixture: ComponentFixture<BotonActualizarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonActualizarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonActualizarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
