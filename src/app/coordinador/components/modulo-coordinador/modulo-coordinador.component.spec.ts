import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCoordinadorComponent } from './modulo-coordinador.component';

describe('ModuloCoordinadorComponent', () => {
  let component: ModuloCoordinadorComponent;
  let fixture: ComponentFixture<ModuloCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloCoordinadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
